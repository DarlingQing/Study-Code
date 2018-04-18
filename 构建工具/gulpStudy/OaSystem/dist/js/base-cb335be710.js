// 模态框
jQuery.fn.showModal=function(){
    var target1=$(this).attr('data-target');
    $('#'+target1).addClass('show');
    $('#'+target1 + '  .close').click(function(){
        var _this = $(this);
        _this.parents('.modal').eq(0).removeClass('show');
    })
}
$('button[data-target]').click(function(){
    $(this).showModal();
})
// todo 下拉组件
jQuery.fn.isShown=true;
jQuery.fn.dropdown= function () {
   // console.log(this);  //this指代当前的button
    var target=$(this).attr('data-toggle');
  // console.log(target); //this知道当前的class
    $('.'+target).children('.dropdown-toggle').toggleClass('dropdown-active');
    $('.'+target).children('.dropdown-menu').toggleClass('show');
    //console.log( $('.'+target).children());
    if(jQuery.fn.isShown){
        $('.caret').css('background-position','-121px -152px');
        jQuery.fn.isShown=false;
    }else{
        $('.caret').css('background-position','-139px -152px');
        jQuery.fn.isShown=true;
    }
    $('.'+target).children('.dropdown-menu').find('li').each(function (i,li) {
        //console.log($(li));
        $(li).children('a').click(function (e) {
            e.preventDefault();
            $('.'+target).children('.dropdown-toggle').children('a').html($(this).html()+"");
            $('.'+target).children('.dropdown-toggle').removeClass('dropdown-active');
            $('.'+target).children('.dropdown-menu').removeClass('show');
            $('.caret').css('background-position','-139px -152px');
            console.log($(this).parent())
            $(this).parent().addClass('active').siblings('.active').removeClass('active');
        })
    })
}
$('.dropdown>.dropdown-toggle').click(function(e) {
    e.preventDefault();
    $(this).dropdown();
});
// todo 二级菜单
$('a[data-menu=menu-sub]').click(function(e){
    e.preventDefault();  //阻止默认事件
    var target=$(this).next();  //target指代 menu-sub
    $(target).toggleClass('menu-sub-show');
    if($(target).hasClass('menu-sub-show')){
        $(target).parent().siblings('.second-level-menu').children('.menu-sub-show').removeClass('menu-sub-show');
    }
})
// todo 标签页
jQuery.fn.tabLayout= function () {
    this.find('ul.tab-choice li a').click(function (e) {
        e.preventDefault();
        //1修改附加导航中li的active
      //  console.log(this);
        $(this).parent().addClass('tab-active').siblings('.tab-active').removeClass('tab-active');
        //2修改.main中div的active
        $($(this).attr('href')).addClass('tab-active').siblings('.tab-active').removeClass('tab-active');
    })
}
$('.nav-tabs').tabLayout();

// todo 左右切换
jQuery.fn.isHide=true;
jQuery.fn.toggleTab=function(){
    $(this).click(function () {
        var width=parseInt($('#left-panel').width()+1);
        var hideTarget=$(this).attr('data-hide');
        if(jQuery.fn.isHide){
            $(this).addClass('react');
            $('#'+hideTarget).css('margin-left',-width+'px');
            $("#right-panel").css('margin-left','0');
            jQuery.fn.isHide=false;
        }else{
            $(this).removeClass('react');
            $('#'+hideTarget).css('margin-left','0');
            $("#right-panel").css('margin-left',width+'px');
            jQuery.fn.isHide=true;
        }
    })
}
$('.fold-menu').toggleTab();
// 公共函数

/* todo 输出错误信息*/
var errMsg=null;
function errPop(msg,elem){
    errMsg=msg;
    $(elem).css('border-color','#f00');
    $(elem).parent().append(`<div class="err-popup">
                       <h3 class="errMsg">${errMsg}</h3>
                       </div>`);
    $(elem).focus(function () {
        $(elem).css('border-color','#d1d2d3');
        $(elem).parent().children('.err-popup').remove();
    })
    return false;
}
/* todo 全选操作 */
function allSel(param1,param2){
    if($(param1).prop('checked')) {
        $(param2).prop("checked", true);
    }else{
        $(param2).prop("checked", false);
    }
}
function allchk(param1,param2){
    var chknum = $("").size();//选项总个数
    var chk = 0;
    $(param1).each(function () {
        if($(this).prop("checked")==true){
            chk++;
        }
    });
    if(chknum==chk){//全选
        $(param2).attr("checked",true);
    }else{//不全选
        $(param2).attr("checked",false);
    }
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJiYXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIOaooeaAgeahhlxualF1ZXJ5LmZuLnNob3dNb2RhbD1mdW5jdGlvbigpe1xuICAgIHZhciB0YXJnZXQxPSQodGhpcykuYXR0cignZGF0YS10YXJnZXQnKTtcbiAgICAkKCcjJyt0YXJnZXQxKS5hZGRDbGFzcygnc2hvdycpO1xuICAgICQoJyMnK3RhcmdldDEgKyAnICAuY2xvc2UnKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICB2YXIgX3RoaXMgPSAkKHRoaXMpO1xuICAgICAgICBfdGhpcy5wYXJlbnRzKCcubW9kYWwnKS5lcSgwKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgIH0pXG59XG4kKCdidXR0b25bZGF0YS10YXJnZXRdJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAkKHRoaXMpLnNob3dNb2RhbCgpO1xufSlcbi8vIHRvZG8g5LiL5ouJ57uE5Lu2XG5qUXVlcnkuZm4uaXNTaG93bj10cnVlO1xualF1ZXJ5LmZuLmRyb3Bkb3duPSBmdW5jdGlvbiAoKSB7XG4gICAvLyBjb25zb2xlLmxvZyh0aGlzKTsgIC8vdGhpc+aMh+S7o+W9k+WJjeeahGJ1dHRvblxuICAgIHZhciB0YXJnZXQ9JCh0aGlzKS5hdHRyKCdkYXRhLXRvZ2dsZScpO1xuICAvLyBjb25zb2xlLmxvZyh0YXJnZXQpOyAvL3RoaXPnn6XpgZPlvZPliY3nmoRjbGFzc1xuICAgICQoJy4nK3RhcmdldCkuY2hpbGRyZW4oJy5kcm9wZG93bi10b2dnbGUnKS50b2dnbGVDbGFzcygnZHJvcGRvd24tYWN0aXZlJyk7XG4gICAgJCgnLicrdGFyZ2V0KS5jaGlsZHJlbignLmRyb3Bkb3duLW1lbnUnKS50b2dnbGVDbGFzcygnc2hvdycpO1xuICAgIC8vY29uc29sZS5sb2coICQoJy4nK3RhcmdldCkuY2hpbGRyZW4oKSk7XG4gICAgaWYoalF1ZXJ5LmZuLmlzU2hvd24pe1xuICAgICAgICAkKCcuY2FyZXQnKS5jc3MoJ2JhY2tncm91bmQtcG9zaXRpb24nLCctMTIxcHggLTE1MnB4Jyk7XG4gICAgICAgIGpRdWVyeS5mbi5pc1Nob3duPWZhbHNlO1xuICAgIH1lbHNle1xuICAgICAgICAkKCcuY2FyZXQnKS5jc3MoJ2JhY2tncm91bmQtcG9zaXRpb24nLCctMTM5cHggLTE1MnB4Jyk7XG4gICAgICAgIGpRdWVyeS5mbi5pc1Nob3duPXRydWU7XG4gICAgfVxuICAgICQoJy4nK3RhcmdldCkuY2hpbGRyZW4oJy5kcm9wZG93bi1tZW51JykuZmluZCgnbGknKS5lYWNoKGZ1bmN0aW9uIChpLGxpKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJChsaSkpO1xuICAgICAgICAkKGxpKS5jaGlsZHJlbignYScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkKCcuJyt0YXJnZXQpLmNoaWxkcmVuKCcuZHJvcGRvd24tdG9nZ2xlJykuY2hpbGRyZW4oJ2EnKS5odG1sKCQodGhpcykuaHRtbCgpK1wiXCIpO1xuICAgICAgICAgICAgJCgnLicrdGFyZ2V0KS5jaGlsZHJlbignLmRyb3Bkb3duLXRvZ2dsZScpLnJlbW92ZUNsYXNzKCdkcm9wZG93bi1hY3RpdmUnKTtcbiAgICAgICAgICAgICQoJy4nK3RhcmdldCkuY2hpbGRyZW4oJy5kcm9wZG93bi1tZW51JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgICAgICQoJy5jYXJldCcpLmNzcygnYmFja2dyb3VuZC1wb3NpdGlvbicsJy0xMzlweCAtMTUycHgnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCQodGhpcykucGFyZW50KCkpXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuJCgnLmRyb3Bkb3duPi5kcm9wZG93bi10b2dnbGUnKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQodGhpcykuZHJvcGRvd24oKTtcbn0pO1xuLy8gdG9kbyDkuoznuqfoj5zljZVcbiQoJ2FbZGF0YS1tZW51PW1lbnUtc3ViXScpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTsgIC8v6Zi75q2i6buY6K6k5LqL5Lu2XG4gICAgdmFyIHRhcmdldD0kKHRoaXMpLm5leHQoKTsgIC8vdGFyZ2V05oyH5LujIG1lbnUtc3ViXG4gICAgJCh0YXJnZXQpLnRvZ2dsZUNsYXNzKCdtZW51LXN1Yi1zaG93Jyk7XG4gICAgaWYoJCh0YXJnZXQpLmhhc0NsYXNzKCdtZW51LXN1Yi1zaG93Jykpe1xuICAgICAgICAkKHRhcmdldCkucGFyZW50KCkuc2libGluZ3MoJy5zZWNvbmQtbGV2ZWwtbWVudScpLmNoaWxkcmVuKCcubWVudS1zdWItc2hvdycpLnJlbW92ZUNsYXNzKCdtZW51LXN1Yi1zaG93Jyk7XG4gICAgfVxufSlcbi8vIHRvZG8g5qCH562+6aG1XG5qUXVlcnkuZm4udGFiTGF5b3V0PSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5maW5kKCd1bC50YWItY2hvaWNlIGxpIGEnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vMeS/ruaUuemZhOWKoOWvvOiIquS4rWxp55qEYWN0aXZlXG4gICAgICAvLyAgY29uc29sZS5sb2codGhpcyk7XG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ3RhYi1hY3RpdmUnKS5zaWJsaW5ncygnLnRhYi1hY3RpdmUnKS5yZW1vdmVDbGFzcygndGFiLWFjdGl2ZScpO1xuICAgICAgICAvLzLkv67mlLkubWFpbuS4rWRpdueahGFjdGl2ZVxuICAgICAgICAkKCQodGhpcykuYXR0cignaHJlZicpKS5hZGRDbGFzcygndGFiLWFjdGl2ZScpLnNpYmxpbmdzKCcudGFiLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCd0YWItYWN0aXZlJyk7XG4gICAgfSlcbn1cbiQoJy5uYXYtdGFicycpLnRhYkxheW91dCgpO1xuXG4vLyB0b2RvIOW3puWPs+WIh+aNolxualF1ZXJ5LmZuLmlzSGlkZT10cnVlO1xualF1ZXJ5LmZuLnRvZ2dsZVRhYj1mdW5jdGlvbigpe1xuICAgICQodGhpcykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd2lkdGg9cGFyc2VJbnQoJCgnI2xlZnQtcGFuZWwnKS53aWR0aCgpKzEpO1xuICAgICAgICB2YXIgaGlkZVRhcmdldD0kKHRoaXMpLmF0dHIoJ2RhdGEtaGlkZScpO1xuICAgICAgICBpZihqUXVlcnkuZm4uaXNIaWRlKXtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3JlYWN0Jyk7XG4gICAgICAgICAgICAkKCcjJytoaWRlVGFyZ2V0KS5jc3MoJ21hcmdpbi1sZWZ0Jywtd2lkdGgrJ3B4Jyk7XG4gICAgICAgICAgICAkKFwiI3JpZ2h0LXBhbmVsXCIpLmNzcygnbWFyZ2luLWxlZnQnLCcwJyk7XG4gICAgICAgICAgICBqUXVlcnkuZm4uaXNIaWRlPWZhbHNlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3JlYWN0Jyk7XG4gICAgICAgICAgICAkKCcjJytoaWRlVGFyZ2V0KS5jc3MoJ21hcmdpbi1sZWZ0JywnMCcpO1xuICAgICAgICAgICAgJChcIiNyaWdodC1wYW5lbFwiKS5jc3MoJ21hcmdpbi1sZWZ0Jyx3aWR0aCsncHgnKTtcbiAgICAgICAgICAgIGpRdWVyeS5mbi5pc0hpZGU9dHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pXG59XG4kKCcuZm9sZC1tZW51JykudG9nZ2xlVGFiKCk7XG4vLyDlhazlhbHlh73mlbBcblxuLyogdG9kbyDovpPlh7rplJnor6/kv6Hmga8qL1xudmFyIGVyck1zZz1udWxsO1xuZnVuY3Rpb24gZXJyUG9wKG1zZyxlbGVtKXtcbiAgICBlcnJNc2c9bXNnO1xuICAgICQoZWxlbSkuY3NzKCdib3JkZXItY29sb3InLCcjZjAwJyk7XG4gICAgJChlbGVtKS5wYXJlbnQoKS5hcHBlbmQoYDxkaXYgY2xhc3M9XCJlcnItcG9wdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiZXJyTXNnXCI+JHtlcnJNc2d9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YCk7XG4gICAgJChlbGVtKS5mb2N1cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoZWxlbSkuY3NzKCdib3JkZXItY29sb3InLCcjZDFkMmQzJyk7XG4gICAgICAgICQoZWxlbSkucGFyZW50KCkuY2hpbGRyZW4oJy5lcnItcG9wdXAnKS5yZW1vdmUoKTtcbiAgICB9KVxuICAgIHJldHVybiBmYWxzZTtcbn1cbi8qIHRvZG8g5YWo6YCJ5pON5L2cICovXG5mdW5jdGlvbiBhbGxTZWwocGFyYW0xLHBhcmFtMil7XG4gICAgaWYoJChwYXJhbTEpLnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgICAkKHBhcmFtMikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XG4gICAgfWVsc2V7XG4gICAgICAgICQocGFyYW0yKS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gYWxsY2hrKHBhcmFtMSxwYXJhbTIpe1xuICAgIHZhciBjaGtudW0gPSAkKFwiXCIpLnNpemUoKTsvL+mAiemhueaAu+S4quaVsFxuICAgIHZhciBjaGsgPSAwO1xuICAgICQocGFyYW0xKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoJCh0aGlzKS5wcm9wKFwiY2hlY2tlZFwiKT09dHJ1ZSl7XG4gICAgICAgICAgICBjaGsrKztcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmKGNoa251bT09Y2hrKXsvL+WFqOmAiVxuICAgICAgICAkKHBhcmFtMikuYXR0cihcImNoZWNrZWRcIix0cnVlKTtcbiAgICB9ZWxzZXsvL+S4jeWFqOmAiVxuICAgICAgICAkKHBhcmFtMikuYXR0cihcImNoZWNrZWRcIixmYWxzZSk7XG4gICAgfVxufSJdLCJmaWxlIjoiYmFzZS1jYjMzNWJlNzEwLmpzIn0=
