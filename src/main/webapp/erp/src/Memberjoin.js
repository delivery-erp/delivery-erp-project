import { Adm_btn, Members_check, Id_checkapi } from './Adm_btn.js';

function Memberjoin(){
    return(
        <form id="fm" name="fm">
        <div className="membody">
           <div className="adtitle">ADMINISTRATOR MEMBERSHIP</div>
           <div className="memoutline" >
              <div className="memsel1">
                <ul className="memu">
                    <li className="memfont">소속</li>
                    <li className="memlisel0">
                        <select className="kosel" id="adm_area">
                            <option value="M">본사</option>
                            <option value="F">지점</option>
                            <option value="A">대리점</option>
                        </select>
                        <select className="kosel" id="office">
                            <option value="">선택해 주세요</option>
                        </select>
                        <select className="kosel" id="agent">
                            
                        </select>
                    </li>
                </ul>  
              </div>
              <div className="memsel1">
                <ul className="memu">
                    <li className="memfont">이름</li>
                    <li><input type="text" id="adm_id" className="admamber1" placeholder="이름을 입력해 주세요"/></li>
                    <li className="memfont1">직책</li>
                    <li>
                        <select className="kosel">
                            <option value="9">임원</option>
                            <option value="8">실장</option>
                            <option value="7">팀장</option>
                            <option value="6">부장</option>
                            <option value="5">차장</option>
                            <option value="4">과장</option>
                            <option value="3">대리</option>
                            <option value="2">주임</option>
                            <option value="1">사원</option>
                        </select>
                    </li>
                </ul>
              </div>
             <div className="memsel2">
                <ul>
                    <li className="memfont">아이디</li>
                    <li><input type="text" className="admamber2" placeholder="아이디를 입력해 주세요"/></li>
                    <li><button type="button" className="idcheck" onClick={Id_checkapi}>중복체크</button></li>
                </ul>    
              </div>
              <div className="memsel2">
                <ul>
                    <li className="memfont">패스워드</li>
                    <li><input type="password" className="admamber1" placeholder="패스워드를 입력해 주세요"/></li>
                    <li className="memfont">패스워드확인</li>
                    <li><input type="password" className="admamber4" placeholder="동일한 패스워드를 입력해 주세요"/></li>
                </ul>    
              </div>
              <div className="memsel3">
                <ul>
                    <li className="memfont">이메일</li>
                    <li><input type="text" className="admamber3" placeholder="이메일을 입력해 주세요"/></li>
                </ul>    
              </div>
              <div className="memsel4">
                <ul>
                    <li className="memfont">연락처</li>
                    <li>
                        <select className="adnumber">
                            <option value="010">010</option>
                            <option value="011">011</option>
                        </select>
                    </li>
                    <li className="ad_number">-</li>
                    <li><input type="text" className="adnumber" maxLength="4"/></li>
                    <li className="ad_number">-</li>
                    <li><input type="text" className="adnumber" maxLength="4"/></li>
                </ul>    
              </div> 
              
           </div>
        </div>
       <div className="admembt">
         <ul>
           <li><button type="button" className="admembt_ok" onClick={Members_check}>신청하기</button></li>
           <li><button type="button" className="admembt_no" onClick={()=>Adm_btn(1)}>취소하기</button></li>
        </ul>
       </div>
    </form> 
    )
}
export default Memberjoin;