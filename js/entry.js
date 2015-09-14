//require("../css/style.css");
$(function () {
    function splitImg(val) {
        return {
            img1: val.split('|')[0],
            img2: val.split('|')[1]
        }
    }

    function showActionImg(el, val) {
        $(el).html('<img src=images/actions/' + val + '>');
    }

    $(".scrollable").scrollable();
    $('.play-btn').overlay({mask: '#000'});
    $('.cancel-btn').click(function () {
        $('.play-btn').overlay().close();
    });
    $('.done-btn').click(function () {
        var opName = $('.op-name').val();
        if (opName !== '') {
            $('.play-btn').overlay().close();
            $('#index-cut-04').addClass('action-bg').html("<div class='sreen'><div class='left-action'></div><div class='right-action'></div><div class='message-action'><div class='message-action-inner'></div></div></div>");
            $.ajax({
                method: "GET",
                //url: "../mock/data.json",
                url: "http://testeventapi.cosfund.com/DLD/Tran.aspx?wAction=103&wParam=name=%E4%B8%80%E6%89%8B%E6%92%B8%E5%A4%A7%E7%A5%9E_avator=1_userid=1439875688000",
                dataType: 'json'
            }).success(function (data) {
                if (data.ReturnCode === 0) {
                    var idx = 0;
                    changeAction(idx);
                    function changeAction(i) {
                        if (i < data.PKInfos.length) {
                            $('.message-action-inner').prepend('<p>' + data.PKInfos[i].Message + '</p>');
                            showActionImg('.left-action', splitImg(data.PKInfos[i].ShowImages[0]).img1);
                            showActionImg('.right-action', splitImg(data.PKInfos[i].ShowImages[0]).img2);
                            if (data.PKInfos[i].ShowImages[1]) {
                                setTimeout(function () {
                                    showActionImg('.left-action', splitImg(data.PKInfos[i].ShowImages[1]).img1);
                                    showActionImg('.right-action', splitImg(data.PKInfos[i].ShowImages[1]).img2);
                                }, 500);
                            }
                            var timer = setTimeout(function () {
                                changeAction(i + 1);
                            }, 2000);
                        } else {
                            clearTimeout(timer);
                        }
                    }


                }
            });
        }
    });

});