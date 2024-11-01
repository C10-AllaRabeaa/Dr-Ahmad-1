
import React from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPrint } from '@fortawesome/free-solid-svg-icons'; // استيراد أيقونة السهم
import "./style.css";
const Irshadat1 = () =>{

    const navigate = useNavigate();

    const handlePrint = () => {
        window.print();
    };

    return (
        <div dir="rtl" className="about-container">
        
        <h1>ارشادات بعد عملية تجميل الأنف :</h1>
        <ol className="about-list">
        <li>
        استخدام المحلول الملحي لأطول فترة ممكنه ( لمدة شهرين اقل شيء).   </li>
        <li>
        يمنع على المريض منعا باتا أن يزيل الجبيرة بنفسه إلا حسب موعد يتم تحديده لأن ذلك يؤثر سلبا على العملية وشكل الأنف وعلى النتيجة المتوقعة.
        </li>
        <li>
        استخدام كمادات الثلج لتخفيف التورم ( أول أيام من العملية).
        </li>
        <li>
        تجنب التدخين وخصوصا أول أسبوعين لأن ذلك يؤخر إلتئام الجرح ويزيد الإحتقانات.
        </li>
        <li>
        من المهم أن يبنام المريض على ظهره لبضعه اسابيع لتجنب اي تأثير على الأنف.
        </li>
        <li>
        يفضل غسل الشعر بمساعده شخص اخر حتى لا تتعرض جبيرة الأنف لأي رطوبة.
        </li>
        <li>
        يتم إزالة الجبيرة عن طريق الطبيب فقط.
        </li>
        <li>
        بعد إزالة الجبيرة بعد الفترة المحددة من قبل الطبيب وأزالة القطب والدعامات الداخلية  يتم وضع اللاصق على الأنف مباشرة بواسطة الطبيب وذلك يستمر لمده 10 أيام ويعامل معاملة الجبيرة وبعد 10 أيام يمكن للمريض إزالته بنفسه ويتم وضعه ليلا عند النوم فقط وإزالته عند الإستيقاظ لمدة سنة.
        </li>
        <li>
        يجب عدم وضع النظارات الطبية والنظارات الشمسية لحوالي شهرين بعد العملية.
        </li>
        <li>
        تجنب ممارسة الرياضة والجيم لمدة شهرين بعد العملية.
        </li>
        <li>
        تجنب السباحة والتعرض المباشر للشمس لفترات طويله خلال أول شهرين بعد العملية ويفضل وضع واقي شمس على الأنف عند الخروج من المنزل.
        </li>
        <li>
        الإلتزام بالعلاجات التي يصفها الطبيب.
        </li>
        </ol>
        <p> يوجد فيديو توضيحي لوضع البلاسترعلى الانف على صفحة الطبيب بالانستقرام.</p>

        <div dir="ltr">
                <button className="btn-back" onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faArrowLeft} /> {/* إضافة أيقونة السهم */}
                </button>
                <button className="btn-print" onClick={handlePrint}>
                    <FontAwesomeIcon icon={faPrint} /> Print
                </button>
            </div>
        </div>
        
    )
}

export default Irshadat1;


/* 

faPrint

const handlePrint = () => {
        window.print();
    };


    <button className="btn-print" onClick={handlePrint}>
                    <FontAwesomeIcon icon={faPrint} /> Print
                </button>

*/