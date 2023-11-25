let answer = [
  {
    name: "quiz1",
    p: "1 - رانندگان با چراغ قرمز چشمک زن در تقاطع ها باید چه عملی انجام دهند ؟",
    answer1:
      "قبل از ورود به تقاطع یا گذرگاه عابر پیاده توقف ، پس از اطمینان از عدم وجود خطر تصادف عبور کنند.",
    answer2: "عبور آزاد است ولی باید با سرعت کم از تقاطع عبور کنند.",
    answer3: "با سرعت بالا و بی درنگ از تقاطع عبور نمایند.",
    answer4: "از سرعت خود کاسته و با احتیاط عبور کنند.",
  },
  {
    name: "quiz2",
    p: "2 - در خیابان ها و جاده هایی که نور کافی وجود دارد",
    answer1: "تمام چراغ ها را باید خاموش نمود.",
    answer2: "باید تنها از نور پایین استفاده کرد.",
    answer3: "باید تنها از چراغ های جانبی جلو و عقب استفاده کرد.",
    answer4: "باید از نور بالا استفاده کرد.",
  },
  {
    name: "quiz3",
    p: "3 - کدامیک از موارد زیر سیستم انتقال قدرت می باشد ؟",
    answer1: "گیربکس - دیفرانسیل",
    answer2: "پدال کلاچ - گیربکس - دیفرانسیل",
    answer3: "موتور - گیربکس - کلاچ",
    answer4: "کلاچ - گیربکس - دیفرانسیل",
  },
  {
    name: "quiz4",
    p: "4 - مسافتی که از زمان ترمز تا زمان توقف طی می شود ... نام دارد ؟",
    answer1: "مسافت توقف",
    answer2: "زمان واکنش",
    answer3: "زمان توقف",
    answer4: "مسافت ترمز",
  },
  {
    name: "quiz5",
    p: "5 - کدامیک از احتیاط های لازم برای ایمن کردن صحنه تصادف صحیح نمی باشد ؟",
    answer1: "موتور خودرو حادثه دیده را خاموش کنید.",
    answer2: "تابلو اعلام خطر را در فاصله مناسب صحنه تصادف قرار دهید.",
    answer3: "به خطر انداختن جان خود برای نجات دیگران اقدام کنند.",
    answer4: "تابلو اعلام خطر را در فاصله مناسب صحنه تصادف قرار دهید.",
  },
  {
    name: "quiz6",
    p: "6 - مهم ترین عامل آلودگی هوا در حمل و نقل چیست ؟?",
    answer1: "ذرات معلق",
    answer2: "مونواکسید کربن",
    answer3: "هیدروکربن ها",
    answer4: "دی اکسید کربن",
  },
  {
    name: "quiz7",
    p: "7 - کدامیک از موارد زیر وظیفه قطع و وصل کردن مدار آب از موتور به رادیاتور را به عهده دارد ؟",
    answer1: "واتر پمپ",
    answer2: "ترموستات",
    answer3: "رادیاتور",
    answer4: "رادیاتور",
  },
  {
    name: "quiz8",
    p: "8 - ترمز ضد قفل در واقع همان ...",
    answer1: "ترمز ABS است.",
    answer2: "ترمز معمولی است.",
    answer3: "ترمز پایی است.",
    answer4: "ترمز دستی است.",
  },
  {
    name: "quiz9",
    p: "9 - بر اساس آیین نامه راهنمایی و رانندگی منظور از ایست وسیله نقلیه در زمان کوتاه کدام است ؟",
    answer1: "ایستادن",
    answer2: "ایست وسیله نقلیه در زمان طولانی",
    answer3: "ایستادن ممنوع",
    answer4: "ایست وسیله نقلیه برای هر مدت ممنوع",
  },
  {
    name: "quiz10",
    p: "10 - تکیه نمودن و آویزان شدن اشخاض به وسیله نقلیه ...",
    answer1: "با رعایت احتیاط مجاز است.",
    answer2: "مجاز است.",
    answer3: "ممنوع است.",
    answer4: "در صورت بی خطر بودن مجاز می باشد.",
  },
  {
    name: "quiz11",
    p: "11 - کم بودن عمق شیار تایر منجر به چه اتفاقی می شود ؟",
    answer1: "افزایش احتمال آسیب به تایر",
    answer2: "سر خوردن خودرو به ویژه در سطوح خیس یا مرطوب",
    answer3: "کاهش مقدار اصطکاک میان تایر و سطح راه",
    answer4: "تمام موارد",
  },
  {
    name: "quiz12",
    p: "12 - کنیستر جزو سیستم ... به موتور محسوب می شود و عمر مفید آن ... می باشد ؟",
    answer1: "سوخت رسانی - یک سال",
    answer2: "سوخت رسانی - دو سال",
    answer3: "سرویس دهنده - دو سال",
    answer4: "سرویس دهنده - یک سال",
  },
  {
    name: "quiz13",
    p: "13 - کدام گزینه در خصوص سرعت بالا صحیح می باشد ؟",
    answer1: "ارائه واکنش مناسب در هنگام مواجهه با خطر را زیاد می کند.",
    answer2: "ارائه واکنش مناسب در هنگام مواجهه با خطر را زیاد می کند.",
    answer3: "راننده در مقابل خطرات نمی تواند عکس العمل به موقع را نشان دهد.",
    answer4:
      "ارائه واکنش مناسب در هنگام مواجهه با خطر را ناتوان ( بسیار سخت ) می کند.",
  },
  {
    name: "quiz14",
    p: "14 - در ترمز ضد قفل برای ترمز گیری باید پا به چه صورت بر روی پدال ترمز فشرد؟",
    answer1: "منقطع",
    answer2: "آهسته",
    answer3: "ممتد",
    answer4: "محکم",
  },
  {
    name: "quiz15",
    p: "15 - استفاده از ترمز دستی در سرعت های بالا چه خطری را به وجود می آورد ؟",
    answer1: "در موارد ضروری نیاز است.",
    answer2: "از دست رفتن پایداری خودرو و فراهم شدن شرایط واژگونی خودرو",
    answer3: "به شدت سرعتش کاسته می شود.",
    answer4: "مسافت توقف کاهش می یابد.",
  },
  {
    name: "quiz16",
    p: "16 - مفهوم رنگ زرد در علائم عبور و مرور چیست ؟",
    answer1: "راهنمایی برای مناطق اداری و آموزشی",
    answer2: "حرکت مجاز",
    answer3: "هشدار عمومی و هشدار برای تعمیر و نگهداری",
    answer4: "راهنما برای مناطق تفریحی و فرهنگی",
  },

  {
    name: "quiz17",
    p: "17 - سبقت گرفتن در راه ها در کدام مورد مجاز نیست ؟",
    answer1: "از 150 متری ورودی تونل ها",
    answer2: "از 100 متری پس از پیچ ها",
    answer3: "از 100 متری مانده به پیچ ها",
    answer4: "اتوبوس ها و کامیون ها در معابر شهری",
  },
  {
    name: "quiz18",
    p: "18 - کدامیک از موارد زیر جان فرد را نسبت به موارد دیگر دیرتر به خطر می اندازد ؟",
    answer1: "بالا بودن درجه حرارت بدن",
    answer2: "فقدان تنفس",
    answer3: "فقدان ضربان قلب",
    answer4: "خونریزی شدید",
  },
  {
    name: "quiz19",
    p: "19 - با کسانی که در صورت ضبط گواهی نامه مبادرت به رانندگی می نمایند چه بر خوردی می شود ؟",
    answer1: "در صورتی که مرتکب خلاف نشود مشمول مجازات نخواهد شد.",
    answer2: "تا پایان عمر به آنها گواهی نامه داده نمی شود.",
    answer3:
      "به مراجع قضایی معرفی و به مجازات مقرر برای رانندگان بدون گواهی نامه محکوم می شوند.",
    answer4: "باید هرچه سریع تر خود را به مراجع قضایی معرفی نمایند.",
  },
  {
    name: "quiz20",
    p: "20 - در راه های کوهستانی و مشابه آن که عبور دو وسیله از کنار هم غیر ممکن باشد حق تقدم با وسیله ای است ... ؟",
    answer1: "با وسیله ای که سرازیری می رود.",
    answer2: "با وسیله ای که سربالایی می رود.",
    answer3: "وسیله ای که سربالایی میرود باید دنده عقب بگیرد.",
    answer4: "با وسیله ای که سمت پرتگاه قرار دارد.",
  },
];
let userSelect = [];
let trueAnswer = [1, 3, 4, 4, 3, 2, 2, 1, 1, 3, 4, 2, 4, 3, 2, 3, 4, 1, 3, 2];

const container = document.querySelector(".container");
const nextButtonElm = document.querySelector(".next");
const prevButtonElm = document.querySelector(".prev");
const endQuizButtonElm = document.querySelector(".end");
const modalScore = document.querySelector(".score");
const restartQuize = document.querySelector(".restartQuiz");
const scoreCount = document.querySelector(".scoreCount");
const startQuizElm = document.querySelector(".startQuiz");
const buttons = document.querySelector(".btnS");

let indexChildOfConrainer = 0;
let cont = 0;


function startQuiz() {
  startQuizElm.style.display = "none";
  buttons.style.opacity = "1";
  showQuizNext();
}
answer.forEach((item) => {
  container.insertAdjacentHTML(
    "beforeend",
    `     <div class="quiz">
    <p>
     ${item.p}
     </p>
     <div class="choices">
     <div class="choice">
     <input type="radio" name="${item.name}" value="1" /><span>${item.answer1}</lable >
     </div>
     <div class="choice">
     <input type="radio" name="${item.name}" value="2" /><span>${item.answer2}</span>
     </div>
     <div class="choice">
        <input type="radio" name="${item.name}" value="3" /><span >${item.answer3}</span>
      </div>
      <div class="choice">
        <input type="radio" name="${item.name}" value="4" /><span >${item.answer4}</span>
      </div>
    </div>
  </div>
   `
  );
});

const childOfConrainer = container.querySelectorAll(".quiz");
function showQuizNext() {
  prevButtonElm.classList.remove("end");
  if (indexChildOfConrainer === childOfConrainer.length - 1) {
    nextButtonElm.classList.add("end");
  }

  childOfConrainer.forEach((child) => {
    child.classList.remove("active");
  });

  childOfConrainer[indexChildOfConrainer].classList.add("active");
  indexChildOfConrainer+= 1;
}

function showQuizPrev() {
  nextButtonElm.classList.remove("end");
  if (indexChildOfConrainer <= 0) {
    prevButtonElm.classList.add("end");
  }else {
    indexChildOfConrainer-= 1;
  }

  childOfConrainer.forEach((child) => {
    child.classList.remove("active");
  });

  childOfConrainer[indexChildOfConrainer].classList.add("active");
}

function endQuiz() {
  let allInputsAreFilled = true;

  for (let i = 0; i < childOfConrainer.length; i++) {
    const inputs = childOfConrainer[i].querySelectorAll('input[type="radio"]');

    let answered = false;
    for (let j = 0; j < inputs.length; j++) {
      if (inputs[j].checked) {
        userSelect.push(parseInt(inputs[j].value));
        answered = true;
        break;
      }
    }

    if (!answered) {
      allInputsAreFilled = false;
      userSelect.push(0);
    }
  }

// claculation of  scores|| محاسبه جواب های درست ازمون //
  for (let i = 0; i < userSelect.length; i++) {
    if (userSelect[i] === trueAnswer[i]) {
      cont++;
    }
    restartQuize.style.display = "block";
    endQuizButtonElm.classList.add("active");
  }
  modalScore.innerHTML = `${
    (cont / trueAnswer.length) * 100
  } درصد          ${cont} جواب درست از${trueAnswer.length} سوال`;
  modalScore.style.display = 'block'
  document.querySelector('.dataQuiz').style.display = 'block'
  nextButtonElm.classList.add("end");
  prevButtonElm.classList.add("end");
}
buttons.style.opacity = "0";
function reloadQuiz() {
  window.location.reload();
}
nextButtonElm.addEventListener("click", showQuizNext);
prevButtonElm.addEventListener("click", showQuizPrev);
endQuizButtonElm.addEventListener("click", endQuiz);
restartQuize.addEventListener("click", reloadQuiz);
startQuizElm.addEventListener("click", startQuiz);
