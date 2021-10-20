function calculator() {
    let s1, s2, rs;

    return {
        init(selector1, selector2, resultSelector) {
            s1 = document.querySelector(selector1);
            s2 = document.querySelector(selector2);
            rs = document.querySelector(resultSelector);
        },
        add(){
            rs.value = Number(s1.value) + Number(s2.value);
        },
        subtract(){
            rs.value = Number(s1.value) - Number(s2.value);
        }
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');



