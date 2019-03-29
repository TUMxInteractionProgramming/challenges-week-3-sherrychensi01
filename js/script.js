//#6 #action #external my app is alive
console.log('app is alive');

//#6 #channels #switcher
function switchChannel(channelName) {
    console.log('Tuning into channel', channelName);
    document.getElementById('channel-name').innerHTML = channelName;
    document.getElementById('channel-location').innerHTML = '<a href="http://w3w.co/upgrading.never.helps" target="_blank">upgrading.never.helps</a>';
    $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');
    $('#channels li').removeClass('selected');
    $('#channels li:contains('+ channelName+')').addClass('selected');
    
}

//#6 #liking 
function liking() {
    $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png');
}
//#6 #taptab chaning to tab
function selectTab(tabld) {
    $('#tab-bar button').removeClass('selected');
    $(tabld).addClass('selected');
    console.log('Changing to tab',tabld);    
}
function emojismenu() {
    $('#emojis').toggle();
}