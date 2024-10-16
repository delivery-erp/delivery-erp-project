import { Adm_btn, Logins_ck } from './Adm_btn.js';

function Loginpage(){
    return(
    <div className="adbody2">
    <div className="adtitle">ADMINISTRATOR</div>
    <div className="admoom">
    <form id="frm" onSubmit={Logins_ck}>
        <div className="intotal"> 
        <div className="adin1">
            <input type="text" id="login_id" className="loginid" defaultValue="" placeholder="아이디"/>
        </div>
        <div className="adin2">
            <input type="password" id="login_pass" className="loginpass" defaultValue="" placeholder="패스워드"/>
        </div>
        </div>
        <div className="adbt">
        <button type="submit" className="loginbt1">로그인</button>
        <button type="button" className="loginbt2" onClick={()=>Adm_btn(2)}>회원가입</button>
        </div>
        <div className="adinfomain">
        <ul>
            <li className="adinfo">※ 사원번호가 없을시 관리자에게 연락 바랍니다.</li>
            <li className="adinfo">※ 모든 정보는 기록되어 집니다.</li>
            <li className="adinfo">※ 퇴사시 해당 정보는 접속이 불가능 하게 됩니다.</li>
        </ul>
        </div>
    </form>
    </div>
    </div>
    );
}
export default Loginpage;