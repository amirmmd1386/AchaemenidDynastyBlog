let modalarr = ["خیزش پارس‌ها با اعلام استقلال پارس از شاهنشاهی ماد شروع شد. طغیان پارس آغازگر جنگ‌های کوروش بزرگ با ایشتوویگو بود. سبب این انقلاب اعمال ایشتوویگو آخرین شاهنشاه ماد بود که باعث متحد شدن استان‌های دیگر با پارس شد. نبردها از ۵۵۲ پیش از میلاد تا ۵۴۹ پیش از میلاد به رهبری کوروش بزرگ ادامه داشتند.",
    "پس از فتح همدان توسط کوروش و اسیر شدن آستیاگ، شوهرخواهر کرزوس شاه لیدیه، وی بسیار نگران بود که رقیب تازه‌ای پیدا کند و کوروش به سرزمین‌های به ارث رسیده از ماد قناعت نکند و آهنگ گرفتن سراسر آسیای صغیر را داشته باشد. از این‌روی تصمیم گرفت که نگذارد رقیب تازه‌نفس قوی گردد و برای اطمینان خاطر، از چند پیشگوی مشهور یک سؤال آزمایشی را پرسید که پاسخش را تنها خود می‌دانست و درصورتی که غیبگوها پاسخ صحیحی دادند، نتیجهٔ جنگ را از آن‌ها بپرسد. از میان پیشگوها، فقط پیشگوی معبد دلفی به نخستین پرسش وی پاسخ صحیحی داد و کرزوس معبد مذکور را غرق در گنجینه‌ای از زر کرد و با اطمینان کامل از درستی بی چون و چرای پیشگویی معبد دلفی، پرسید که آیا می‌تواند وارد جنگ با کوروش شود؟ پاسخ مشهود پیشگو این بود: «در جنگ بین کرزوس و کوروش، فرمانروایی بزرگی فرو خواهد پاشید». اینکه منظور از «فرمانروایی بزرگ» خود لیدیه بود، از ذهن وی نگذشت و از این پاسخ خشنود شد و سرگرم تجهیز خود برای لشکرکشی علیهٔ کوروش شد. وی فرستادگانی به مصر و بابل فرستاد و از آن‌ها خواست علیهٔ کوروش با وی متحد شوند و هردوی آن‌ها که از بزرگ شدن دولت هخامنشی نگران بودند، این اتحاد را پذیرفتند و وعده کردند که در سال آینده به او کمک کنند.[۷۰] در این هنگام، یکی از فرستادگان کرزوس به وی خیانت کرده و نزد کوروش آمد و بدو اطلاع داد که کرزوس در حال تدارک نیرو برای جنگ با توست. کوروش فوراً مقدمات جنگ را آماده کرد و تشخیص داد که نباید به دشمن فرصت دهد و او باید حمله را آغاز کند.",
    "نبرد اوپیس یکی از نبردهای کوروش بزرگ بود که در سپتامبر ۵۳۹ پیش از میلاد رخ داد، این نبرد باعث ضمیمه شدن امپراتوری بابل نو به خاک هخامنشیان شد.[۲] مکان دقیق این نبرد شهر اُپیس بر روی رودخانهٔ دجله در ۸۰ کیلومتری بغداد امروزی بوده‌است، تصور می‌شود برای رسیدن به اپیس باید از رودخانه عبور می‌کردند، گزنفون مورخ یونانی، یک پل در آن‌جا برای عبور را توصیف می‌کند",
    "هرودوت می‌گوید که کوروش با حیله به یکی از اردوگاه‌های ماساگت حمله‌ور شد و بسیاری ساکنان آنجا را کشت؛ ولی پس از این جریان، قسمت اعظم نیروهای ماساگت تحت فرماندهی ملکه تهم‌رییش، شکست سنگینی بر ایرانیان وارد آوردند و کوروش کشته شد.[۱۰۷] ماساگت‌ها سر بریده کوروش را در کیسه‌ای انداختند و آن کیسه پر از خون شده بود. هرودوت می‌نویسد این نبرد شدیدترین نبردهایی است که «بربر» ها در آن شرکت جسته‌اند.[۱۰۸] البته هردوت می‌گوید که دربارهٔ مرگ کوروش حکایات زیادی وجود دارد و روایتی که من ذکر کردم به حقیقت نزدیک‌تر است. در نتیجه معلوم می‌شود که خود هرودوت هم از صحت این روایت مطمئن نبوده‌است.[۱۰۹] بنابر گزارش مورخان یونانی، کوروش در جنگ با ماساگتها ۲۰۰ هزار مرد جنگی را از دست داد که اغراق آشکاری است."];
let modal = document.querySelector('.modal-body');
function mp(num) {
    modal.innerHTML = modalarr[num];
}
let slideShowTop = document.querySelector('header');
let slidIndex = 0;
let slidePic = ["bg_image/header_bg.jpg", "bg_image/header_bg1.jpg", "bg_image/header_bg2.jpg", "bg_image/header_bg3.jpg"];
function slide(){
    slideShowTop.style.backgroundImage="url("+slidePic[slidIndex]+")";
    slidIndex++;
    if(slidIndex>=slidePic.length){
        slidIndex = 0;
    }
}
setInterval(slide,5000);