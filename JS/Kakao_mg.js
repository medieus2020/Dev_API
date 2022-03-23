
    Kakao.init('Javascript Key');
   
    function sendLink() {
      Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: 'MEDIEUS',
          description: 'info',
	      imageUrl: 'https://medieus.com',
         
		  link: {
            mobileWebUrl: 'https://medieus.com',
            webUrl: 'https://medieus.com'
          }
        },
       
        buttons: [
          {
            title: 'Doctor',
            link: {
              mobileWebUrl: 'https://medieus.com/',
              webUrl: 'https://medieus.com/'
            }
          },
          {
            title: 'HOSPITAL',
            link: {
              mobileWebUrl: 'https://medieus.com/',
              webUrl: 'https://medieus.com/'
            }
          }
        ]
      });
	 
    }
