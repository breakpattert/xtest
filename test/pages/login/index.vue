<template>
	<div class="main">
		<div class="header">header</div>
		<div class="mui-content" style="margin-top: 2.4rem;">
			<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<a class="mui-control-item mui-active" href="#item1mobile">
				Login as SMS
			</a>
					<a class="mui-control-item" href="#item2mobile">
				Login as Password
			</a>
				</div>
				<!--<div id="sliderProgressBar" class="mui-slider-progress-bar mui-col-xs-4"></div>-->
				<div class="mui-slider-group">
					<div id="item1mobile" class="mui-slider-item mui-control-content mui-active">
						<div id="scroll1" class="mui-scroll-wrapper">
							  <div class="main-cont-input">
                        		<input type="text" name="mobile"  @input="lengthLimit('mobile')" placeholder="Such as: 09561234567">
                   			  </div>
                    		  <div class="main-cont-input">
                        		<div class="input_left">
                        			<input type="password" name="password"  placeholder="Verification Code">
                        		</div>
                        		<div class="input_right">
                        			<span>Get verification code</span>
                        		</div>
                    		  </div>
						</div>
					</div>
					<div id="item2mobile" class="mui-slider-item mui-control-content">
						<div id="scroll2" class="mui-scroll-wrapper">
                    		  <div class="input_pass">
                        		<div class="input_left">
                        			<input type="password" name="password"  placeholder="Verification Code">
                        		</div>
                        		<div class="input_right input_color">
                        			<span>Validation passed</span>
                        		</div>
                    		  </div>
                    		    <div class="input_pass">
                        		<div class="input_left ms_left">
                        			<input type="password" name="password"  placeholder="Verification Code">
                        		</div>
                        		<div class="input_right">
                        			<span>Validation passed</span>
                        		</div>
                    		  </div>
						</div>

					</div>

				</div>
			</div>

			<!--<h5 class="mui-content-padded">Color</h5>-->
			<!--<div class="mui-card">
				<form class="mui-input-group">
					<div class="mui-input-row mui-radio">
						<label><span class="mui-bg-primary" style="display:block;width:25px;height:25px;"></span>
						</label>
						<input name="radio1" type="radio" checked value="primary">
					</div>
					<div class="mui-input-row mui-radio">
						<label><span class="mui-bg-positive" style="display:block;width:25px;height:25px;"></span>
						</label>
						<input name="radio1" type="radio" value="positive">
					</div>
					<div class="mui-input-row mui-radio">
						<label><span class="mui-bg-negative" style="display:block;width:25px;height:25px;"></span>
						</label>
						<input name="radio1" type="radio" value="negative">
					</div>
				</form>
			</div>-->

		</div>
		<div class="footer"> 
			<button type="button" class="mui-btn mui-btn-danger mui-btn-block">Login</button>
			<h5>
				<a href="">Fast Signup</a>
				<a href="">Open a Shop</a>
				<a href="">Forgot password</a>
			</h5>
			<div class="other_login">
				<h6>

					<span>Or login with</span>
				</h6>
				<h4>
					<a href="">
						<strong></strong>
						<span>Facebook</span>
					</a>
					<a href="">
						<strong></strong>
						<span>Google</span>
					</a>
				</h4>
				
			</div>
		</div>
	</div>
</template>

<script>
//	import '~/static/css/mui/css/mui.min.css'
//	import '~assets/static/mui.min.js'
    export default {
        data() {
            return {
            	name:333
            }
        },
        head: {
		  script: [
		      { src: 'js/mui.min.js' },
		    ],
		    link: [
//		    	{ rel: 'stylesheet', href: 'css/mui/css/mui.min.css' }
		      // { rel: 'stylesheet', href: 'css/zzsc.css' }
		    ]
		 },
		 created(){
//		 	console.log(this.name);
		 	
		 },
        mounted() {
				
        },
        components: {
        }
    }
</script>
<style scoped>

/*
	@import './login.scss';*/
	.header{
		height:2rem;
		border-bottom: 1px solid #e2e2e2;
	}
	.main {

		text-align: center;
		width:100%;
		    padding: 1rem 1rem 0 1rem;
		background:#fff;
		border:1px solid red;
		/*background: url(../../assets/bg.png) no-repeat;*/
		background-size: 100% auto;
		  /*  height:14rem;*/
	}
	#sliderSegmentedControl .mui-control-item{
		border:1px solid #ff4500;
		color:#ff4500;
	/*	font-size: 14px;*/
	}
	.mui-control-content{
		height: 800px !important;
		    background: #fff;
	}
	.mui-col-xs-4{
		width:49.8% !important;
	}
	#sliderProgressBar{
		background: #ff4500;
	}
	#sliderSegmentedControl{
		background-color: #fff;
		border:1px solid #ff4500;
	}
	.mui-slider .mui-segmented-control.mui-segmented-control-inverted~.mui-slider-group .mui-slider-item {
		    height: 6rem !important;
    border-top: 0!important;
    border-bottom: 0!important;
    
}
	.mui-slider-indicator .mui-active{
		color:#fff !important;
		background: #ff4500 !important;
		
	}
	.mui-scroll-wrapper{
		background: #fff !important;
		color: #333;
		top:1rem !important;
		border:1px solid red;
		    height: 10rem !important;
	}
	#scroll1{
		
	}
	.footer{
		    padding-top: 1.3rem;
		        padding-bottom: 1rem;
	}
	.footer .mui-btn-block{
		    padding: 0.5rem 0;
		    font-size:1rem;
	}
	.footer .mui-btn-danger{
		    border: 1px solid #ff4500;
    background-color: #ff4500;
	}
	.footer>h5{
		    font-size: 0.85rem;
    color: #666666;
    line-height: 1.6rem;
    margin-top: 1rem;
    margin-bottom: 4rem;
    padding: 0px 1rem 0px 1rem;
	}
	.footer>h5>a{
font-size: 0.75rem;
		    display: inline-block;
    width: 32.2%;
    color: #ff4500;
    text-align: center;
    text-decoration: underline;
	}
	/*#sliderProgressBar{
	background: #ff4500 !important;
	}*/
	/*.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{
		color:#fff !important;
		background: #ff4500 !important;
	}*/
	.other_login>h6{
    text-align: center;
        height: 0.92rem;
    text-align: center;
    border-bottom: 1px solid #e2e2e2;
	}
	.other_login>h6>span{
		    font-size: 0.75rem;
    display: inline-block;
    text-align: center;
    background: #fff;
    padding: 0px 0.85rem 0px 0.85rem ;
    line-height: 1.75rem;
    color: #999999;
    vertical-align: top;
	}
	.other_login>h4{
		    text-align: center;
    padding: 1.25rem 0rem 0.85rem 0rem;
	}
	.other_login>h4>a{
		    display: inline-block;
    text-align: center;
    font-weight: normal;
    font-size: 0.85rem;
    margin: 0px 1.42rem;
    width: 3.6rem;
    height: 1.6rem;
    text-align: center;
	}
	.other_login>h4>a>strong{
	display: inline-block;
    width:  3.8rem;;
    height: 3.8rem;
        border: 1px solid #000;
	}
	.other_login>h4>a>>span{
			    display: inline-block;
    line-height: 1.6rem;
    font-size: 0.85rem;
    color:#555;
	}
	.main-cont-input input{
		font-size: 0.8rem!important;
		border-top:0!important;
		    background-color: rgba(226, 226, 226, 0.46) !important;
		margin-bottom:0 !important;
		
		
	}
	.input_left{
		width:50%;
		    float: left;
	}
	.input_left input{
		    border-right: 0 !important;
    border-radius: 0 !important;
	}
	.input_right{
		width:50%;
		display: inline-block;
		line-height: 2.5rem;
		height: 2.5rem;

		border-bottom: 1px solid #eee;
    	    border-bottom: 0.013333rem solid rgba(27, 26, 26, 0.99);
		background-color: rgba(226, 226, 226, 0.46) !important;
		position: relative;

	}
	.input_right span{
		    width: 82%;
 position: absolute;
    display: block;
    background: #ff4500;
    border-radius: 5px;
    line-height: 1.8rem;
    left: 10%;
        top: 0.38rem;
        border-radius: 0.3rem;
        color:#fff;
        font-size:0.75rem;
	}
	.input_pass{
		overflow: hidden;
		    height: 2.5rem;
	}
	.ms_left input{
	border-top: 0 !important;
	}
	.input_color>span{
		background: none;
		color:
	}
</style>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~assets/stylus/variable"

</style>