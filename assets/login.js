$(function(){
    const SERVERPATH = window.location.origin;
    $(".upload_btn").click(function(){
        $.ajax({
            type:"post",
            data:$("#login_form").serialize(),
            url:SERVERPATH+"/addAction",
            success:function(res){
                console.log(res)
                $("#showErrMsg").html(res['msg']);
                alert('msg')
            }
        })
    })

}) 
