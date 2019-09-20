const gameStart = document.querySelector('.game-start');
        const gameArea = document.querySelector('.game-area');
        const gameOver = document.querySelector('.game-over');
        const gameScore = document.querySelector('.game-score');
        const gamePoints = gameScore.querySelector('.points');

        gameStart.addEventListener('click', onGameStart);
        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('keyup', onKeyUp);

        function onGameStart() {
            gameStart.classList.add('hide');

            const wizard = document.createElement('div');
            wizard.classList.add('wizard');
            wizard.style.top = state.player.y + 'px';
            wizard.style.left = state.player.x + 'px';
            gameArea.appendChild(wizard);
            state.player.width = wizard.offsetWidth;
            state.player.height = wizard.offsetHeight;

            window.requestAnimationFrame(frame(0));
        }

        //using currying for capturing timestamp of last and previous frame
        const frame = (previousFrameTimestamp) => async (currentFrameTimestamp) => {   
            if (!scene.isActiveGame) {
                return;
            }

            const timeDelta = currentFrameTimestamp - previousFrameTimestamp;
            const timeBetweenFrames = 1000 / game.maxFPS;

            if(timeDelta >= timeBetweenFrames) {
                draw(currentFrameTimestamp)
                window.requestAnimationFrame(frame(currentFrameTimestamp));
            } else {
                window.requestAnimationFrame(frame(previousFrameTimestamp));
            }
        }

        //Game Loop
        //timestamp is send by window.requestAnimationFrame        
        function draw (timestamp) {
            const wizard = document.querySelector('.wizard');

            scene.score++;

            // Add bugs
            if (timestamp - scene.lastBugSpawn > game.bugSpawnInterval + 5000 * Math.random()) {
                let bug = document.createElement('div');
                bug.classList.add('bug');
                bug.x = gameArea.offsetWidth - 60;
                bug.style.left = bug.x + 'px';
                bug.style.top = (gameArea.offsetHeight - 60) * Math.random() + 'px';
                gameArea.appendChild(bug);
                scene.lastBugSpawn = timestamp;
            } 

            // Add clouds
            if (timestamp - scene.lastCloudSpawn > game.cloudSpawnInterval + 20000 * Math.random()) {
                let cloud = document.createElement('div');
                cloud.classList.add('cloud');
                cloud.x = gameArea.offsetWidth - 200;
                cloud.style.left = cloud.x + 'px';
                cloud.style.top = (gameArea.offsetHeight - 200) * Math.random() + 'px';
                gameArea.appendChild(cloud);
                scene.lastCloudSpawn = timestamp;
            }

            // Modify bug positions
            let bugs = document.querySelectorAll('.bug');
            bugs.forEach(bug => {
                bug.x -= game.speed * 3;
                bug.style.left = bug.x + 'px';

                if (bug.x + bugs.offsetWidth <= 0) {
                    bug.parentElement.removeChild(bug);
                }
            });

            // Modify cloud positions
            let clouds = document.querySelectorAll('.cloud');
            clouds.forEach(cloud => {
                cloud.x -= game.speed;
                cloud.style.left = cloud.x + 'px';

                if (cloud.x + clouds.offsetWidth <= 0) {
                    cloud.parentElement.removeChild(cloud);
                }
            });

            // Modify fireballs positions
            let fireBalls = document.querySelectorAll('.fire-ball');
            fireBalls.forEach(fireBall => {
                fireBall.x += game.speed * game.fireBallMultiplier;
                fireBall.style.left = fireBall.x + 'px';

                if (fireBall.x + fireBall.offsetWidth > gameArea.offsetWidth) {
                    fireBall.parentElement.removeChild(fireBall)
                }
            });

            // Apply gravitation
            let isInAir = (state.player.y + state.player.height) <= gameArea.offsetHeight
            if (isInAir) {
                state.player.y += game.speed;
            }

            // Register user input            
            if (keys.ArrowUp && state.player.y > 0) {
                state.player.y -= game.speed * game.movingMultiplier; 
            }
            if (keys.ArrowDown && isInAir){
                state.player.y += game.speed * game.movingMultiplier;
            }
            if (keys.ArrowLeft && state.player.x > 0) {
                state.player.x -= game.speed * game.movingMultiplier;
            }
            if (keys.ArrowRight && state.player.x + state.player.width < gameArea.offsetWidth) {
                state.player.x += game.speed * game.movingMultiplier;
            }
            if (keys.Space && timestamp - state.player.lastTimeFiredFireball > game.fireInterval) {
                wizard.classList.add('wizard-fire');
                addFireBall(state.player);
                state.player.lastTimeFiredFireball = timestamp;
            }
            
            if(!keys.Space) {
                wizard.classList.remove('wizard-fire');
            }

            // Collision detection
            bugs.forEach(bug => 
            {
                if (isCollision(wizard, bug)) {
                    gameOverAction();
                }

                fireBalls.forEach(fireBall => {
                    if (isCollision(fireBall, bug)) {
                        scene.score += game.bugKillBonus
                        bug.parentElement.removeChild(bug);
                        fireBall.parentElement.removeChild(fireBall);
                    }
                })
            });

            
            // Apply movement
            wizard.style.top = state.player.y + 'px';
            wizard.style.left = state.player.x + 'px';

            // Apply score
            gamePoints.textContent = scene.score;            
        }