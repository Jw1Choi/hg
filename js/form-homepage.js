const form = document.getElementById('form');
form.innerHTML = `
<div class="form-box" id="fm-box">
<div class="inner">


   <div style="text-align:-webkit-center;">
   <div style="border:1.5px solid #000;width:350px;padding:10px;">
   <b>신청 마감 | </b><span id="day" style="font-weight:600;"></span> [ <span id="countdown" style="font-weight:600;"></span>]
      </div></div><br><br>
      
    <h1 class="form-top-title">특별 이벤트 & 무료 전화 상담 신청하기<br></h1>
    <div class="form-box-inner">
        <form action="" id="form_e11" method="POST" target="hidden_iframe11" onsubmit="dll(); submitted=true;">
          <input type="hidden" name="entry.272078534" value="onepage">
            <div class="form-box-tb-out">
            <br>
                <table class="form-box-tb">
                    <tbody>
                        <tr id="select_lic">
                            <th><!--<i class="fa fa-user" aria-hidden="true"></i>-->성별<br></th>
                            <td>

                                <select name='entry.1818522882' id='mf' class="form-control" placeholder="성별">

                                    <option value="성별" selected disabled>성별 선택</option>
                                        <option value="여성">여성</option>
                                        <option value="남성">남성</option>
                                        
                                      
                                </select>

                           
                            </td>
                        </tr>
                    <tr>
                        <th><!--<i class="fa fa-user" aria-hidden="true"></i>-->이름</th>
                        <td>
                            <input type='text' name='entry.583978956' id='name' class="form-control" placeholder="성함" maxlength="4">
                        </td>
                    </tr>
                  
                    <tr>
                        <th>연령</th>
                        <td>
                            <input type='text' name='entry.1881318671' id='age' class="form-control" placeholder="연령" maxlength="2">
                           
                        </td>
                    </tr>
                  
            <tr>
              <th><!--<i class="fa fa-phone" aria-hidden="true"></i>-->연락처</th>
              <td>
                  <input type='text' name='entry.576088086' id='phone' class="form-control" placeholder="휴대폰번호" maxlength="11">
              </td>
          </tr>
                    <!-- <tr>
                        <th>통화가능시간</th>
                        <td>
                            <select name="entry.882151947" id='position' class="form-control" placeholder="현재 조건">

                                <option value="통화가능시간" selected disabled>통화가능시간
                                    <option value="언제나 통화 가능">언제나 통화 가능</option>
                                    <option value="오전 09:00~10:00">오전 09:00 ~ 10:00</option>
                                    <option value="오전 10:00~11:00">오전 10:00 ~ 11:00</option>
                                    <option value="오전 11:00~12:00">오전 11:00 ~ 12:00</option>
                                    <option value="점심 12:00~01:00">점심 12:00 ~ 01:00</option>
                                    <option value="오후 01:00~02:00">오후 01:00 ~ 02:00</option>
                                    <option value="오후 02:00~03:00">오후 02:00 ~ 03:00</option>
                                    <option value="오후 03:00~04:00">오후 03:00 ~ 04:00</option>
                                    <option value="오후 04:00~05:00">오후 04:00 ~ 05:00</option>
                                    <option value="오후 05:00~06:00">오후 05:00 ~ 06:00</option>
                                    <option value="오후 06:00~07:00">오후 06:00 ~ 07:00</option>
                            </select>
                        </td>
                    </tr> -->
                    <tr>
                        <th>문의사항</th>
                        <td>
                            <textarea name='entry.1817436242' id='message' class="form-control" placeholder="문의사항을 적어주세요.(선택)" style="min-height:100px"></textarea>
                        </td>
                    </tr>
                   
                    <tr>
                        <td colspan="2" style="border-bottom: none"> 
                          
                        
                            <input class="submit-btn" type='submit' id='send_message' value='무료 상담 신청하기' disabled >
                            <div class="form-agree-box">
                                <p class="form-info-agree">
                                    <span>
                                       
                                        <input type="checkbox" name="agree11" id="agree11" value="개인정보보호정책 동의" checked style="width:20px;">
                                        <label style="color:#000; font-weight:500;font-size:13px;" for="agree11">개인정보보호정책</label>
                    
                    
                                        <span class="privacyBtn" style="color:#000;font-weight:400; font-size: 13px;margin-top:-3px; " onclick="privacyPopUp()">
                                            [자세히 보기]
                                        </span>
                                    </span>
                                </p>

                                <script type="text/javascript">var submitted = false;</script>

                                <iframe name="hidden_iframe11" id="hidden_iframe11" style="display:none;" onload=""></iframe>
                                <iframe name="hidden_iframe12" id="hidden_iframe12" style="display:none;" onload=""></iframe>
                               
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </form>
    </div>
</div>
</div><!----form-end------>




<section id="dbscf" style="display:none;">
  <form id="db" name="inputForm" accept-charset="euc-kr" method="post" action="https://dbdbdeep.com/site17/ifr/ifr_save.php" target="hidden_iframe12">
  <input type="hidden" name="ms" value="S00211145V" />
		<input type="hidden" name="ca" value="C05052301J" />
		<input type="hidden" name="auto_defense" />




<div style="font-size: 21px;" class="input_title"><span>이름</span><input type="text" name="name" style="width:30%;" /></div>
<div style="font-size: 21px;" class="input_title"><span>성별</span>
<input type="radio" name="sex" id="female" value="여" style="margin:0 0; vertical-align:middle;" /><label for="female" style="margin-right:10px;">여성</label>
<input type="radio" value="남" name="sex" id="male" style="margin:0 0; vertical-align:middle;" /><label for="male">남성</label></div>
<div style="font-size: 21px;" class="input_title"><span>나이</span><input type="text" name="age" maxlength="2" style="width:20%;" />세</div>
<div style="font-size: 21px;" class="input_title"><span>연락처</span>
	<select type="text" name="tel1" style="width:20%; border:none; border-bottom:1px solid #ccc;" >
		<option value="010">010</option>
		<option value="011">011</option>
		<option value="016">016</option>
		<option value="017">017</option>
		<option value="018">018</option>
		<option value="019">019</option>
	</select>-
	<input type="text" name="tel2" style="width:20%;" maxlength="4" />-
	<input type="text" name="tel3" style="width:20%;" maxlength="4" />
</div>
<div style="font-size: 21px;" class="input_title"><span>문의사항</span><textarea name="etc" style="margin-top:10px" class="textarea_box"></textarea></div>


	<div style="font-size:0.7em;"><input type="checkbox" name="agree" id="agreement"  style="margin:0 0; vertical-align:middle;" checked/><label for="agreement">개인정보 취급 동의</label><a href="javascript:dbdb_pri_popup();">[보기]</a>

    </form>

<div class="footer_btn">
<a href="#" onclick="javascript:OnSubmit();">



<img src="images/dbform_request_btn.png" />	

</a>

</div>

</div>

</div>
  </section>
  </form>
  
  
  </section>

 <div class="wrap linkWrap">
  <div class="sec00 contents" style="padding-top:60px;">
      <div class="inner">
      <p style="font-size:18px;font-weight:700;color:#444;">
         <span id="day2" style="color:#444;"></span>실시간 신청자 현황<br>
          현재 <span class="counter blink" style="bottom:0px;color:red;font-weight:700;">7</span> / 150 명 남았습니다.
      </p>
      <div class="box_02">
          <div class="box_02_1">
              <div style="position:relative;height:150px;overflow:hidden;">
                  <div id="ticker_wrap" style="position: absolute;top:0px;right:0px;width:100%;">
                      <table id="ticker" class="tg">
                      <tbody>
                          <tr>
                              <td class="tg-0lax"><span class="submit_02">특별할인이벤트</span></td>
                              <td class="tg-02ax">55세 / 신청 완료</td>
                              <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                          </tr>
                          <tr>
                              <td class="tg-0lax"><span class="submit_02">특별할인이벤트</span></td>
                              <td class="tg-02ax">50세 / 신청 완료</td>
                              <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                          </tr>
                          <tr>
                              <td class="tg-0lax"><span class="submit_02">특별할인이벤트</span></td>
                              <td class="tg-02ax">66세 / 신청 완료</td>
                              <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                          </tr>
                          <tr>
                              <td class="tg-0lax"><span class="submit_02">특별할인이벤트</span></td>
                              <td class="tg-02ax">45세 / 신청 완료</td>
                              <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                          </tr>
                          <tr>
                              <td class="tg-0lax"><span class="submit_02">특별할인이벤트</span></td>
                              <td class="tg-02ax">42세 / 신청 완료</td>
                              <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                          </tr>
                          <tr>
                              <td class="tg-0lax"><span class="submit_02">특별할인이벤트</span></td>
                              <td class="tg-02ax">51세 / 신청 완료</td>
                              <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                          </tr>
                          <tr>
                              <td class="tg-0lax"><span class="submit_02">특별할인이벤트</span></td>
                              <td class="tg-02ax">49세 / 신청 완료</td>
                              <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                          </tr>
                          <tr>
                              <td class="tg-0lax"><span class="submit_02">특별할인이벤트</span></td>
                              <td class="tg-02ax">38세 / 신청 완료</td>
                              <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                          </tr>
                          <tr>
                              <td class="tg-0lax"><span class="submit_02">특별할인이벤트</span></td>
                              <td class="tg-02ax">47세 / 신청 완료</td>
                              <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                          </tr>
                      </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
      </div>
  </div>
</div> 

<div id="privacy">
    <div id="privacyContent">
      <div class="titWrap">
        <span>개인정보처리방침</span>
        <i style="margin-top:-23px !important" class="ion-close-circled closeBtn"></i>
      </div>
      <div style="line-height:1.2" class="conWrap">
        개인정보처리방침<br><br>
        ‘플로스’ 회사는 (이하 ‘회사’는) 고객님의 개인정보를 중요시하며, “개인정보보호법”, “정보통신망 이용촉진 및 정보보호에 관한 법률”등 관련법규를 준수하고 있습니다. 회사는 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.<br />
        아울러 개인정보 제공자가 동의한 내용 외의 다른 목적으로 활용하지 않으며, 제공된 개인정보의 이용을 거부하고자 할 때에는 개인정보 관리책임자를 통해 열람, 정정, 삭제를 요구할 수 있습니다.<br><br>
        <br />
        01. 수집하는 개인정보 항목<br />
        <br />
        회사는 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다.<br />
        <br />
        -수집항목 : 본인이름, 본인나이, 본인연락처, 이메일, 문의(불편)사항, 강의 질문 등 <br />
        -개인정보수집방법 : 홈페이지(강의신청양식)<br />
        <br />
        02. 개인정보의 수집 및 이용목적<br />
        회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.<br />
        <br />
        서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 상담, 요금정산, 구매 및 요금결제, 물품배송 또는 청구지 등 발송<br />
        회원관리 : 회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 불량회원의 부정 이용 방지와 비인가 사용 방지 , 구매 의사 확인 , 연령확인 , 만14세 미만 아동 개인정보 수집 시 법정 대리인 동 여부 확인 , 불만처리 등 민원처리 , 고지사항 전달, 입사 지원에 따른 본인 확인, 제휴신청 업체 정보 확인<br />
        마케팅 및 광고      에 활용 : 신규 서비스(제품) 개발 및 특화 , 이벤트 등 광고성 정보 전달 , 인구통계학적 특성에 따른 서비스 제공 및 광고 게재 , 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계<br />
        <br />
        또한, 본 회사는 “통신비밀보호법”에 의거하여 공개되지 않은 타인 간의 대화를 녹음 또는 청취하지 못하며,<br />
        위반 시 10년 이하의 징역과 5년 이하의 자격정지에 처하도록 규정을 따르고 있으며, 녹취를 할 때 내 사건에 증거로 제출할 목적으로 서로간의 합의하에만 녹취가 가능합니다.<br />
        <br />
        03. 개인정보의 보유 및 이용기간<br />
        원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.<br />
        <br />
        보존항목 : 이름, 나이, 연락처, 주소, 이메일, 강의 신청 질문<br />
        보존근거 : 전자상거래 등에서의 소비자보호에 관한 법률<br />
        보존기간 : 5년<br />
        <br />
        그리고 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.<br />
        <br />
        보존항목 : 이름, 나이, 연락처, 주소, 이메일<br />
        보존근거 : 전자상거래 등에서의 소비자보호에 관한 법률<br />
        보존기간 : 5년<br />
        <br />
        04. 개인정보의 파기절차 및 방법<br />
        회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.<br />
        <br />
        <br />
        -파기절차<br />
        <br />
        고객님이 상담신청 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함)내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조)일정기간 저장된 후 파기되어집니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.<br />
        <br />
        -파기방법<br />
        <br />
        전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.<br />
        <br />
        05. 개인정보의 제3자 제공<br />
        회사는 정보주체의 개인정보를 이용목적 내에서만 처리하며, 정보 주체의 동의, 법률의 특별한 규정이 있는 경우에만 개인정보를 제3자에게 제공합니다.<br />
        회사는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.<br />
        <br />
        -제공하는 개인정보 항목 : 본인이름, 본인나이, 본인연락처, 불편사항, 결혼유무, 이메일 등 고객이 입력한 정보<br />
        -제공받는 자의 개인정보 이용목적<br />
        서비스 제공에 관한 이행 및 서비스 제공에 따른 콘텐츠제공<br />
        고객을 대상으로 제품 상담 응대 및 판매<br />
        서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 상담, 요금정산, 구매 및 요금결제, 물품배송 또는 청구지 등 발송<br />
        -회원 관리 : 회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 불량회원의 부정 이용 방지와 비인가 사용 방지 , 구매 의사 확인 , 연령확인 , 만14세 미만 아동 개인정보 수집 시 법정 대리인 동의여부 확인 , 불만처리 등 민원처리 , 고지사항 전달, 입사 지원에 따른 본인 확인, 제휴신청 업체 정보 확인<br />
        -마케팅 및 광고에 활용 : 신규 서비스(제품) 개발 및 특화 , 이벤트 등 광고성 정보 전달 , 인구통계학적 특성에 따른 서비스 제공 및 광고 게재 , 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계<br />
        -제공받는 자의 보유․이용기간 : 5년(소비자의 불만 또는 분쟁처리에 관한 기록 : 3년)<br />
        고객은 제3자 개인정보 제공에 대하여 동의를 거부할 권리가 있으며 동의를 거부할 경우 서비스 제공 및 서비스 제공에 따른 콘텐츠 제공에 제한이 있을 수 있습니다.<br />
        <br />
        06. 이용자 및 법정대리인의 권리와 그 행사방법<br />
        이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다. 이용자들의 개인정보 조회, 수정을 위해서는 ‘개인정보변경’(또는 ‘회원정보수정’ 등)을 가입해지(동의철회)를 위해서는 “회원탈퇴”를 클릭하여 본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다. 혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다. 귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다. 회사는 이용자의 요청에 의해 해지 또는 삭제된 개인정보는 “회사가 수집하는 개인정보의 보유 및 이용기간”에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.<br />
        <br />
        07. 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항<br />
        회사는 귀하의 정보를 수시로 저장하고 찾아내는‘쿠키(cookie)’ 등을 운용합니다. 쿠키란 인사이드케어 솔루션의 웹사이트를 운영하는데 이용되는 서버가 귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에 저장됩니다. 회사은(는) 다음과 같은 목적을 위해 쿠키를 사용합니다.<br />
        <br />
        쿠키 등 사용 목적<br />
        회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과 관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공<br />
        귀하는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 귀하는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.<br />
        쿠키 설정 거부 방법<br />
        예: 쿠키 설정을 거부하는 방법으로는 회원님이 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.<br />
        설정방법 예(인터넷 익스플로어의 경우) : 웹 브라우저 상단의 도구 &gt; 인터넷 옵션 &gt; 개인정보<br />
        단, 귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.<br />
        <br />
        08. 개인정보에 관한 민원서비스<br />
        회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고 있습니다.<br />
        <br /> 
        귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보 보호 관련민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다.<br />
        회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.<br />
        <br />
        기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.<br />
        <br />
        개인분쟁조정위원회 (www.1336.or.kr/1336)<br />
        정보보호마크인증위원회 (www.eprivacy.or.kr/02-580-0533~4)<br />
        대검찰청 인터넷범죄수사센터 (http://icic.sppo.go.kr/02-3480-3600)<br />
        경찰청 사이버테러대응센터 (www.ctrc.go.kr/02-392-0330)
      </div>
    </div>
  </div>

`;

document.body.appendChild(form.content);