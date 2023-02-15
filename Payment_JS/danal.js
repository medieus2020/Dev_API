        var IMP = window.IMP; 
        IMP.init("서비스번호"); 
    		
			IMP.request_pay({
                pg : 'danal_tpay',
                pay_method : 'card',
                merchant_uid: "store id", 
                name : 'product name',
                amount : 'money',
                buyer_email : 'email',
                buyer_name : 'user name',
                buyer_tel : 'phone number',
                buyer_addr : 'address',
                buyer_postcode : 'post code',
				
            }, function (rsp) { // callback
                if (rsp.success) {
                var msg = 'success';
               // msg += '고유ID : ' + rsp.imp_uid;
              //  msg += '상점 거래ID : ' + rsp.merchant_uid;
               // msg += '결제 금액 : ' + rsp.paid_amount;
              //  msg += '카드 승인번호 : ' + rsp.apply_num;

            } else {
                var msg = '결제에 실패하였습니다.';
                msg += '에러내용 : ' + rsp.error_msg;
			
            }
            alert(msg);
            });
			}
       