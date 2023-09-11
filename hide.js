var non_take = ["実践数値計算（CS）", "情報数学Ⅱ", "データ構造とアルゴリズム演習（CS）", "システムプログラミング実験", "ソフトウェア構成論（CS）", "言語処理系（EECS）", "確率統計 ｂ", "コンピュータネットワーク（CS）", "ソフトウェア設計論（CS）", "情報数学Ⅱ"];
function main(){
    for (let i = 0; i<100; i++){
        try{
            for (let p = 0; p < non_take.length; p++) {
                for (let step = 2; step < 1000000000; step++) {
                    var subdoc = document.getElementById("Mainbe563520x8976x437fxb9d7x6d9e9d8b98a0").contentWindow.document;
                    var subdoc2 = document.getElementById("Main99b684bdxb492x4b03xad36xf1fc3808e34f").contentWindow.document;
                    const element = subdoc.querySelector('body > div > form > table > tbody > tr:nth-child('+String(step)+')');
                    const element2 = subdoc2.querySelector('body > div > form > div > table > tbody > tr:nth-child('+String(step)+')');
                    let s_element = element.querySelector('td:nth-child(2)');
                    let s_element2 = element2.querySelector('td:nth-child(3)');
                    //console.log(String(s_element.textContent))
                    for (let s = 0; s < non_take.length; s++) {
                        if(String(s_element.textContent).includes(non_take[s])){
                            element.remove();
                        }
                    }
                    for (let t = 0; t < non_take.length; t++) {
                        if(String(s_element2.textContent).includes(non_take[t])){
                            element2.remove();
                        }
                    }
                }
            }
        }catch(e){
            console.log(i)
        }
    }
}
window.onload = main;