if (! localStorage.noFirstVisit) {
    document.getElementById('cookies-prompt').style.display = 'flex';   
}
function setVisited(){
    localStorage.noFirstVisit = "1";
    document.getElementById('cookies-prompt').style.display = 'none'; 
}
function showMenu() {
    document.getElementById("menuIcon").style.display = "none";
    document.getElementById("menu-mobile").style.display = "flex";
    document.getElementById("menuHideIcon").style.display = "flex";
}
function hideMenu() {
    if (window.matchMedia('(max-width: 480px)').matches) {
        document.getElementById("menuIcon").style.display = "flex";
    }
    document.getElementById("menu-mobile").style.display = "none";
    document.getElementById("menuHideIcon").style.display = "none";
}

function scrollToElement(param) {
    const id = param;
    const yOffset = -130;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    hideMenu();
}
function scrollInsideCarous(param) {
    var topPos = document.getElementById(param).offsetLeft;

    document.getElementById('carousell').scrollTo({ left: topPos - 10, behavior: "smooth" });
}
function privacyPage() {
    var elem = document.createElement('div');
    elem.setAttribute('id', 'privacy');
    elem.innerHTML = `<div style="width: 80%;height:5rem;background-color:#f8f8fa;padding: 0.5%;padding-left: 10%;padding-right: 10%;
    display: flex;flex-direction: row;align-items: center;justify-content: space-between;">
        <h4 style="color:#203864;">Privacy Policy</h4>
        <div onclick="closePrivacy()"><img src="assets/Icon feather-menu.png"
        width="20px"
                alt="Supportful logo" width="20px" height="auto" style="cursor:pointer;"></div>
    </div>
    <div style="padding: 2.5%;padding-right:10%;padding-left:10%;">
    <br>
        <h3 style="color:#203864;font-weight:500;">Colection of information</h3>
        <br>
        <h4 style="margin-bottom: 0.5rem;color: #203864;font-weight:500;">Information you provide us</h4>
        <p style="line-height: 1.4rem;
        font-size: 16px;
        color:#7f7f7f;">We collect information you provide directly to us. For example, you share information directly with us when you create an account, fill out a form, submit or post content through our Services, purchase a membership, communicate with us via third-party platforms, request customer support, or otherwise communicate with us. The types of personal information we may collect include your name, display name, username, bio, email address, business information, your content, including your avatar image, photos, posts, responses, and series published by you, and any other information you choose to provide. <br><br>

        In some cases, we may also collect information you provide about others, such as when you purchase a Medium membership as a gift for someone. We will use this information to fulfill your request and will not send communications to your contacts unrelated to your request, unless they separately consent to receive communications from us or otherwise engage with us.<br><br>
        
        We do not collect payment information through our Services. We rely on third parties to process payments in connection with our Services. Any information you provide to facilitate such a payment is subject to the third-party payment processor’s privacy policy, and we encourage you to review this policy before you provide any information to the payment processor.</p>
        <br><br>
        <h4 style="color:#203864;font-weight:500;">Information We Collect Automatically When You Interact with Us
        </h4>
        <br>
\        <p style="line-height: 1.4rem;
        font-size: 16px;
        color:#7f7f7f;">In some instances, we automatically collect certain information, including: <br><br>

        Activity Information: We collect information about your activity on our Services, such as your reading history and when you share links, follow users, highlight posts, and clap for posts.<br>
        Transactional Information: When you purchase a membership, we collect information about the transaction, such as subscription details, purchase price, and the date of the transaction.<br>
        Device and Usage Information: We collect information about how you access our Services, including data about the device and network you use, such as your hardware model, operating system version, mobile network, IP address, unique device identifiers, browser type, and app version. We also collect information about your activity on our Services, such as access times, pages viewed, links clicked, and the page you visited before navigating to our Services.<br>
        Information Collected by Cookies and Similar Tracking Technologies: We use tracking technologies, such as cookies and web beacons, to collect information about you. Cookies are small data files stored on your hard drive or in device memory that help us improve our Services and your experience, see which areas and features of our Services are popular, and count visits. Web beacons (also known as “pixel tags” or “clear GIFs”) are electronic images that we use on our Services and in our emails to help deliver cookies, count visits, and understand usage. We also work with third party analytics providers who use cookies, web beacons, device identifiers, and other technologies to collect information about your use of our Services and other websites and applications, including your IP address, web browser, mobile network information, pages viewed, time spent on pages or in mobile apps, and links clicked. This information may be used by Medium and others to, among other things, analyze and track data, determine the popularity of certain content, deliver content targeted to your interests on our Services, and better understand your online activity. For more information about cookies and how to disable them, see Your Choices below.</p>
        <br><br>
        <h4 style="color:#203864;font-weight:500;line-height:1.4rem;">Information We Collect from Other Sources</h4>
        <br>
        <p style="line-height: 1.4rem;
        font-size: 16px;
        color:#7f7f7f;">We obtain information from third-party sources. For example, we may collect information about you from social networks, accounting services providers and data analytics providers. Additionally, if you create or log into your Medium account through a third-party platform (such as Apple, Facebook, Google, or Twitter), we will have access to certain information from that platform, such as your name, lists of friends or followers, birthday, and profile picture, in accordance with the authorization procedures determined by such platform.</p>
        <br><br>
    </div>`;
    elem.style.cssText = 'position:fixed;width:99vw;height:100vh;top:0;left:0;z-index:100;background-color:white;overflow-y:scroll;';
    elem.classList.add('fadeIn');
    document.body.appendChild(elem);
}
function closePrivacy() {
    // var observer = new IntersectionObserver(function (entries) {
    //     if (entries[0].isIntersecting === true) {
    //         var elem = document.getElementById("privacy");
    //         elem.remove();
    //     }
    // }, { threshold: [1] });
    // observer.observe(document.querySelector("#privacy"));
    var elem = document.getElementById("privacy");
            elem.remove();
}