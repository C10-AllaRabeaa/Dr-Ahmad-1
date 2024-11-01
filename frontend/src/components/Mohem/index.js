import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faPrint } from '@fortawesome/free-solid-svg-icons';
import "./style.css";

const Mohem = () => {

    const navigate = useNavigate();

    const handlePrint = () => {
        window.print();
    };
    return (
        <div dir="rtl">
            <div className="about-container">
                <h1>معلومات مهمة للمرضى :</h1>
                <ol >
                    <li>الآلام :
                        <ul className="sub-list">
                            <li> الإحساس بضغط خفيف على الأنف نظراً لوجود الجبيرة .</li>
                            <li> الإحساس بحكة أو شد بسيط مكان الغرز .</li>
                            <li> الإحساس بثقل الوجه أو صداع بسيط نظراً لانسداد الأنف .</li>
                        </ul>
                    </li>
                    <li>انسداد الأنف :
                        <ul className="sub-list">
                            <li>الاحساس بإنسداد الأنف ويقل تدريجياً وذلك نتيجة :
                                <ul>
                                    <li>وجود غرز داخل الأنف .</li>
                                    <li>وجود دم متجمع داخل الأنف .</li>
                                    <li>قد يوجد دعامة بلاستيكية داخل الأنف.</li>
                                    <li>العلاج : استخدام بخاخات الأنف المعطاة ( ثلاث مرات يوميا) وفي حالة الإنسداد الشديد يرجى التواصل مع العيادة .</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>نزيف الأنف :
                        <ul>
                            <li>قد يكون هنالك نزيف على هيئة نقط أو عدة نقاط من الأنف أو افرازات مخاطية   بها دم لمدة (2-4) أيام .</li>
                            <li>العلاج : يتم استخدام بخاخ أو قطرة الأنف (Decozal - Atrovin) ثلاث مرات يومياً  وفي حال وجود نزيف أشد يرجى التواصل مع العيادة .</li>
                        </ul>
                    </li>
                    <li>التورمات :
                        <ul>
                            <li>احتمال تورم خفيف أو زرقان تحت العين أو حول العين من اليوم الثاني الى اليوم الخامس من العملية ويقل تدريجياً .</li>
                        </ul>
                    </li>
                    <li>الحرارة :
                        <ul>
                            <li>قد يحدث إرتفاع نصف درجة أول يومين من العملية ويتم استخدام بنادول كل 8 ساعات .</li>
                        </ul>
                    </li>
                    <li>الإحساس بالغثيان أو الرغبة بالتقيؤ :
                        <ul>
                            <li>قد يحدث الإحساس بالقيء نتيجة  المضاد الحيوي والأدوية .</li>
                            <li>العلاج : يتم ايقاف المضاد الحيوي وإبلاغ الطبيب لتغيير نوع المضاد .</li>
                        </ul>
                    </li>
                    <li>أعراض أخرى :
                        <ul>
                            <li>ألم بسيط بالحلق أو جفاف الشفتين نظراً لانسداد الأنف والتنفس من الفم .</li>
                            <li>إدماع العين نظراً لوجود إنسداد في الأنف .</li>
                            <li>العلاج : يتم شرب أي سوائل دافئة .</li>
                        </ul>
                    </li>
                    <li>ملاحظة مهمة :
                        <ul>
                            <li>تجنب أي اصابة بالأنف مثل :
                                <ul>
                                    <li>باب المنزل او السيارة .</li>
                                    <li>الإصطدام بالمرايا .</li>
                                    <li>الموبايل .</li>
                                    <li>الأطفال .</li>
                                    <li>أو أي شيء يؤثر على الأنف .</li>

                                </ul>
                            </li>
                        </ul>
                    </li>
                </ol>
                <div dir="ltr">
                    <button className="btn-back" onClick={() => navigate(-1)}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>

                    <button className="btn-print" onClick={handlePrint}>
                    <FontAwesomeIcon icon={faPrint} /> Print
                </button>
                </div>
            </div>

        </div>
    )
}

export default Mohem;




