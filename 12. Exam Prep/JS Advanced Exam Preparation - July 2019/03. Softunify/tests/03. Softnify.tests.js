const SoftUniFy  = require('../03. Softunify');
const { expect } = require('chai');

describe('03. SoftUniFy Tests', () => {
    describe('General Tests', () => {
        it('Expect SoftUniFy to be function', () => {
            expect(typeof SoftUniFy).to.be.equal('function');
        });

        it('Expect new SoftUniFy() to return object', () => {
            expect(typeof new SoftUniFy()).to.be.equal('object');
        });

        it('Expect constructor of SoftUniFy works properly', () => {
            const result = new SoftUniFy();

            expect(typeof result.allSongs).to.be.equal('object');
            expect(Object.keys(result).length).to.be.equal(1, 'SoftUniFy Object is incorrect');
            expect(Object.keys(result.allSongs).length).to.be.equal(0, 'AllSong are not empty');
        });
    });

    describe('Function downloadSong Tests', () => {
        let softUniFyObject;

        beforeEach(() => {
            softUniFyObject = new SoftUniFy();
        });

        it('Expect allSongs to have one artist with one song', () => {
            softUniFyObject.downloadSong('Septicflesh', 'Anubis', '...AAA...');
            
            expect(softUniFyObject.allSongs.hasOwnProperty('Septicflesh')).to.be.equal(true, 'artist is not added');
            expect(Object.keys(softUniFyObject.allSongs).length).to.be.equal(1, 'not correct artists count');
            expect(softUniFyObject.allSongs['Septicflesh'].songs.length).to.be.equal(1, 'songs count is not correct');
            expect(softUniFyObject.allSongs['Septicflesh'].songs.join(', ')).to.be.equal('Anubis - ...AAA...', 'lyrics are not added correctly');
        });

        it('Multiple songs for one artist addition test', () => {
            softUniFyObject.downloadSong('Sade', 'Love is found', '...AAA...');
            softUniFyObject.downloadSong('Sade', 'Smooth Operator', '...BBB...');
            softUniFyObject.downloadSong('Sade', 'Is it a Crime', '...CCC...');

            expect(softUniFyObject.allSongs.hasOwnProperty('Sade')).to.be.equal(true, 'artist is not added');
            expect(Object.keys(softUniFyObject.allSongs).length).to.be.equal(1, 'not correct artists count');
            expect(softUniFyObject.allSongs['Sade'].songs.length).to.be.equal(3, 'songs count is not correct');
            expect(softUniFyObject.allSongs['Sade'].songs.join(', ')).to.be.equal('Love is found - ...AAA..., Smooth Operator - ...BBB..., Is it a Crime - ...CCC...', 'lyrics are not added correctly');            
        });

        it('Multiple songs for multiple artists addition test', () => {
            softUniFyObject.downloadSong('Sade', 'Love is found', '...AAA...');
            softUniFyObject.downloadSong('Sade', 'Smooth Operator', '...BBB...');
            softUniFyObject.downloadSong('Sade', 'Is it a Crime', '...CCC...');

            softUniFyObject.downloadSong('Evanescence', 'Lithium', '...LLL...');
            softUniFyObject.downloadSong('Evanescence', 'Hello', '...FFF...');
            softUniFyObject.downloadSong('Evanescence', 'Lacrymosa', '...KKK...');

            expect(softUniFyObject.allSongs.hasOwnProperty('Sade')).to.be.equal(true, 'artist is not added');
            expect(softUniFyObject.allSongs.hasOwnProperty('Evanescence')).to.be.equal(true, 'artist is not added');
            expect(Object.keys(softUniFyObject.allSongs).length).to.be.equal(2, 'not correct artists count');
            expect(softUniFyObject.allSongs['Sade'].songs.length).to.be.equal(3, 'songs count is not correct');
            expect(softUniFyObject.allSongs['Sade'].songs.join(', ')).to.be.equal('Love is found - ...AAA..., Smooth Operator - ...BBB..., Is it a Crime - ...CCC...', 'lyrics are not added correctly');
            expect(softUniFyObject.allSongs['Evanescence'].songs.length).to.be.equal(3, 'songs count is not correct');
            expect(softUniFyObject.allSongs['Evanescence'].songs.join(', ')).to.be.equal('Lithium - ...LLL..., Hello - ...FFF..., Lacrymosa - ...KKK...', 'lyrics are not added correctly');
        });
    });

    describe('Function playSong Tests', () => {
        let softUniFyObject;

        beforeEach(() => {
            softUniFyObject = new SoftUniFy();

            softUniFyObject.downloadSong('Sade', 'Love is found', '...AAA...');
            softUniFyObject.downloadSong('Sade', 'Smooth Operator', '...BBB...');
            softUniFyObject.downloadSong('Sade', 'Is it a Crime', '...CCC...');
            softUniFyObject.downloadSong('Sade', 'Same name', '...CCC...');

            softUniFyObject.downloadSong('Evanescence', 'Lithium', '...LLL...');
            softUniFyObject.downloadSong('Evanescence', 'Hello', '...FFF...');
            softUniFyObject.downloadSong('Evanescence', 'Lacrymosa', '...KKK...');
            softUniFyObject.downloadSong('Evanescence', 'Same name', '...RRR...');
        });

        it('Expect playSong to find given song', () => {
            const result = softUniFyObject.playSong('Hello');
            
            expect(result.trim()).to.be.equal('Evanescence:\nHello - ...FFF...');
        });

        it('Expect to find all song with same name', () => {
            const result = softUniFyObject.playSong('Same name');            
            expect(result.trim()).to.be.equal('Sade:\nSame name - ...CCC...\nEvanescence:\nSame name - ...RRR...');
        });

        it('Expect to return correct message if song is not found', () => {
            const result = softUniFyObject.playSong('Missing');   
            expect(result).to.be.equal(`You have not downloaded a Missing song yet. Use SoftUniFy's function downloadSong() to change that!`);  
        });
    });

    describe('Function songsList Tests', () => {
        let softUniFyObject;

        beforeEach(() => {
            softUniFyObject = new SoftUniFy();

            softUniFyObject.downloadSong('Sade', 'Love is found', '...AAA...');
            softUniFyObject.downloadSong('Sade', 'Smooth Operator', '...BBB...');
            softUniFyObject.downloadSong('Sade', 'Is it a Crime', '...CCC...');
            softUniFyObject.downloadSong('Sade', 'Same name', '...CCC...');

            softUniFyObject.downloadSong('Evanescence', 'Lithium', '...LLL...');
            softUniFyObject.downloadSong('Evanescence', 'Hello', '...FFF...');
            softUniFyObject.downloadSong('Evanescence', 'Lacrymosa', '...KKK...');
            softUniFyObject.downloadSong('Evanescence', 'Same name', '...RRR...');
        });

        it('Expect to get all songs', () => {
            const result = softUniFyObject.songsList;

            expect(result).to.be.equal('Love is found - ...AAA...\n' + 
            'Smooth Operator - ...BBB...\n' +
            'Is it a Crime - ...CCC...\n'+ 
            'Same name - ...CCC...\n' + 
            'Lithium - ...LLL...\n' + 
            'Hello - ...FFF...\n' + 
            'Lacrymosa - ...KKK...\n' +
            'Same name - ...RRR...', 'Songs are not get correctly');
        });

        it('Expect error message if no songs present', () => {
            const result = new SoftUniFy().songsList;
            expect(result).to.be.equal('Your song list is empty', 'Wrong error message');
        });
    });

    describe('Function rateArtist Tests', () => {
        let softUniFyObject;

        beforeEach(() => {
            softUniFyObject = new SoftUniFy();

            softUniFyObject.downloadSong('Sade', 'Love is found', '...AAA...');
            softUniFyObject.downloadSong('Sade', 'Smooth Operator', '...BBB...');
            softUniFyObject.downloadSong('Sade', 'Is it a Crime', '...CCC...');
            softUniFyObject.downloadSong('Sade', 'Same name', '...CCC...');

            softUniFyObject.downloadSong('Evanescence', 'Lithium', '...LLL...');
            softUniFyObject.downloadSong('Evanescence', 'Hello', '...FFF...');
            softUniFyObject.downloadSong('Evanescence', 'Lacrymosa', '...KKK...');
            softUniFyObject.downloadSong('Evanescence', 'Same name', '...RRR...');
        });

        it('Expect error message if artist is not present', () => {
            const result = softUniFyObject.rateArtist('Missing');
            const result2 = softUniFyObject.rateArtist('');
            const result3 = softUniFyObject.rateArtist();

            expect(result).to.be.equal('The Missing is not on your artist list.', 'Wrong error message');
            expect(result2).to.be.equal('The  is not on your artist list.', 'Wrong error message');
            expect(result3).to.be.equal('The undefined is not on your artist list.', 'Wrong error message');
        });

        it('Expect rateArtist to add rate and vote to given artist', () => {
            const result = softUniFyObject.rateArtist('Sade', 5);

            expect(result).to.be.equal(5, 'Incorrect result returned by the rateArtist function');
            expect(softUniFyObject.allSongs['Sade'].rate).to.be.equal(5, 'Incorrect rate property');
            expect(softUniFyObject.allSongs['Sade'].votes).to.be.equal(1, 'Incorrect vote property');
        });

        it('Expect rateArtist to add rate and vote to given artist', () => {
            softUniFyObject.rateArtist('Sade', 5);
            const result = softUniFyObject.rateArtist('Sade', 3);

            expect(result).to.be.equal(4, 'Incorrect result returned by the rateArtist function');
            expect(softUniFyObject.allSongs['Sade'].rate).to.be.equal(8, 'Incorrect rate property');
            expect(softUniFyObject.allSongs['Sade'].votes).to.be.equal(2, 'Incorrect vote property');
        });

        it('Expect rateArtist to add rate and vote to multiple artists', () => {
            softUniFyObject.rateArtist('Sade', 5);
            const sadeResult = softUniFyObject.rateArtist('Sade', 3);

            softUniFyObject.rateArtist('Evanescence', 6);
            softUniFyObject.rateArtist('Evanescence', 2);
            const evanescenceResult = softUniFyObject.rateArtist('Evanescence', 8);
            
            expect(sadeResult).to.be.equal(4, 'Incorrect result returned by the rateArtist function');
            expect(softUniFyObject.allSongs['Sade'].rate).to.be.equal(8, 'Incorrect rate property');
            expect(softUniFyObject.allSongs['Sade'].votes).to.be.equal(2, 'Incorrect vote property');

            expect(evanescenceResult).to.be.equal(5.33, 'Incorrect result returned by the rateArtist function');
            expect(softUniFyObject.allSongs['Evanescence'].rate).to.be.equal(16, 'Incorrect rate property');
            expect(softUniFyObject.allSongs['Evanescence'].votes).to.be.equal(3, 'Incorrect vote property');
        });

        it('Expect to get correct current rate of artist', () => {            
            softUniFyObject.rateArtist('Sade', 5);
            softUniFyObject.rateArtist('Sade', 3);

            softUniFyObject.rateArtist('Evanescence', 6);
            softUniFyObject.rateArtist('Evanescence', 2);
            softUniFyObject.rateArtist('Evanescence', 8);

            const sadeResult = softUniFyObject.rateArtist('Sade');
            const evanescenceResult = softUniFyObject.rateArtist('Evanescence');

            expect(sadeResult).to.be.equal(4, 'Incorrect result returned by the rateArtist function');
            expect(evanescenceResult).to.be.equal(5.33, 'Incorrect result returned by the rateArtist function');
        }); 
    });
});