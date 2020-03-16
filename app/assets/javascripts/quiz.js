'use strict';
{
  function test(){
  
    const question = document.getElementById('question');
    const choices = document.getElementById('choices');
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');
    const scoreLabel = document.querySelector('#result > p');

    const quizSet = [
      {q: 'What is A?', c:['A0','A1','A2']},
      {q: 'What is B?', c:['B0','B1','B2']},
      {q: 'What is C?', c:['C0','C1','C2']},
    ];
    let currentNum = 0;
    let isAnswered; //回答したかどうかを確認する変数を定義
    let score = 0;


    function shuffle(arr){
      isAnswered = false;

      for (let i = arr.length - 1; i > 0; i --) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[j],arr[i]] = [arr[i],arr[j]];
      }
      return arr;
    }

    function checkAnswer(li) {
      // if (isAnswered === true){
      if (isAnswered){ //上記の===trueを省略したものが左記
        return;
      }
      isAnswered = true;
      if (li.textContent === quizSet[currentNum].c[0]){
        li.classList.add('correct');
        score++;
      }else{
        li.classList.add('wrong');
      }
      
      btn.classList.remove('disabled');
    }
    
    function setQuiz() {
      isAnswered = false; //画面を表示(クイズが始まった時は)した時にまだ回答をしていないという記述
      question.textContent = quizSet[currentNum].q;

      while (choices.firstChild){ //while文：引数に単一オブジェクトを渡した場合は、nullかfalseになるまで繰り返す
        choices.removeChild(choices.firstChild); //choicesの最初の要素がなくなるまでリムーブを繰り返す。
      }

      const shuffledChoices = shuffle([...quizSet[currentNum].c]);
      // console.log(quizSet[currentNum].c)
      shuffledChoices.forEach(choice => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click',()=>{
          checkAnswer(li);
        })
        choices.appendChild(li);
      });

      if (currentNum === quizSet.length - 1){ //もし現在のquestionが最終であれば
        btn.textContent = 'show score'; //id="btnの文字列はNEXT ではなく show scoreを表示させる
      }
    }


    setQuiz();


    btn.addEventListener('click',()=>{
      if (btn.classList.contains('disabled')){
        return;
      }

      btn.classList.add('disabled');

      if(currentNum === quizSet.length -1 ){ //最後の問題だった場合、
        // console.log(`Score: ${score} / ${quizSet.length}`); //score(何問中何問正当したか)をconsole表示
        scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`
        result.classList.remove('hidden');
      }else{
      currentNum++; //そうでなければ新しいクイズを表示
      setQuiz();
      }



    });
  }
  window.addEventListener("load", test); //htmlファイルを全て読み込んだ後にjavascriptを読み込むように定義
}