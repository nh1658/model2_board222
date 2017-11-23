	$(document).ready(function() {
		
	    //Main 카테고리를 선택 할때 마다 AJAX를 호출할 수 있지만 DB접속을 매번 해야 하기 때문에 main, sub카테고리 전체을 들고온다.
	     
	    //****************이부분은 DB로 셋팅하세요.
	    //Main 카테고리 셋팅 (DB에서 값을 가져와 셋팅 하세요.)
	    var mainCategoryArray = new Array();
	    var mainCategoryObject = new Object();
	     
	    mainCategoryObject = new Object();
	    mainCategoryObject.main_category_id = "1";
	    mainCategoryObject.main_category_name = "beauty";
	    mainCategoryArray.push(mainCategoryObject);
	     
	    mainCategoryObject = new Object();
	    mainCategoryObject.main_category_id = "2";
	    mainCategoryObject.main_category_name = "reading";
	    mainCategoryArray.push(mainCategoryObject);
	    
	    mainCategoryObject = new Object();
	    mainCategoryObject.main_category_id = "3";
	    mainCategoryObject.main_category_name = "game";
	    mainCategoryArray.push(mainCategoryObject);
	    
	    mainCategoryObject = new Object();
	    mainCategoryObject.main_category_id = "4";
	    mainCategoryObject.main_category_name = "job";
	    mainCategoryArray.push(mainCategoryObject);
	     
	    //Sub 카테고리 셋팅 (DB에서 값을 가져와 셋팅 하세요.)
	    var subCategoryArray = new Array();
	    var subCategoryObject = new Object();
	     
	    //beauty에 해당하는 sub category 리스트
	    subCategoryObject = new Object();
	    subCategoryObject.main_category_id = "1";
	    subCategoryObject.main_category_name = "beauty";
	    subCategoryObject.sub_category_id = "1"
	    subCategoryObject.sub_category_name = "makeup" 
	    subCategoryArray.push(subCategoryObject);
	     
	    subCategoryObject = new Object();
	    subCategoryObject.main_category_id = "1";
	    subCategoryObject.main_category_name = "beauty";
	    subCategoryObject.sub_category_id = "2"
	    subCategoryObject.sub_category_name = "fashion" 
	    subCategoryArray.push(subCategoryObject);
	     
	     
	    //reading에 해당하는 sub category 리스트
	    subCategoryObject = new Object();
	    subCategoryObject.main_category_id = "2";
	    subCategoryObject.main_category_name = "reading";
	    subCategoryObject.sub_category_id = "1"
	    subCategoryObject.sub_category_name = "literature" 
	    subCategoryArray.push(subCategoryObject);
	     
	    subCategoryObject = new Object();
	    subCategoryObject.main_category_id = "2";
	    subCategoryObject.main_category_name = "reading";
	    subCategoryObject.sub_category_id = "2"
	    subCategoryObject.sub_category_name = "Non-literacy"
	    subCategoryArray.push(subCategoryObject);
	    
	  //game에 해당하는 sub category 리스트
	    subCategoryObject = new Object();
	    subCategoryObject.main_category_id = "3";
	    subCategoryObject.main_category_name = "game";
	    subCategoryObject.sub_category_id = "1"
	    subCategoryObject.sub_category_name = "PC" 
	    subCategoryArray.push(subCategoryObject);
	     
	    subCategoryObject = new Object();
	    subCategoryObject.main_category_id = "3";
	    subCategoryObject.main_category_name = "game";
	    subCategoryObject.sub_category_id = "2"
	    subCategoryObject.sub_category_name = "Mobile" 
	    subCategoryArray.push(subCategoryObject);
	    
	  //job에 해당하는 sub category 리스트
	    subCategoryObject = new Object();
	    subCategoryObject.main_category_id = "4";
	    subCategoryObject.main_category_name = "job";
	    subCategoryObject.sub_category_id = "1"
	    subCategoryObject.sub_category_name = "resume" 
	    subCategoryArray.push(subCategoryObject);
	     
	    subCategoryObject = new Object();
	    subCategoryObject.main_category_id = "4";
	    subCategoryObject.main_category_name = "job";
	    subCategoryObject.sub_category_id = "2"
	    subCategoryObject.sub_category_name = "job Announcement" 
	    subCategoryArray.push(subCategoryObject);
	   
	    subCategoryObject = new Object();
	    subCategoryObject.main_category_id = "4";
	    subCategoryObject.main_category_name = "job";
	    subCategoryObject.sub_category_id = "3"
	    subCategoryObject.sub_category_name = "resume share" 
	    subCategoryArray.push(subCategoryObject);

	    //****************이부분은 DB로 셋팅하세요.
	     
	     
	    //메인 카테고리 셋팅
	    var mainCategorySelectBox = $("select[name='BOARD_MAINCATEGORY']");
	     
	    for(var i=0;i<mainCategoryArray.length;i++){
	        mainCategorySelectBox.append("<option value='"+mainCategoryArray[i].main_category_name+"'>"+mainCategoryArray[i].main_category_name+"</option>");
	    }
	     
	    //*********** 1depth카테고리 선택 후 2depth 생성 START ***********
	    $(document).on("change","select[name='BOARD_MAINCATEGORY']",function(){
	         
	        //두번째 셀렉트 박스를 삭제 시킨다.
	        var subCategorySelectBox = $("select[name='BOARD_SUBCATEGORY']");
	        subCategorySelectBox.children().remove(); //기존 리스트 삭제
	         
	        //선택한 첫번째 박스의 값을 가져와 일치하는 값을 두번째 셀렉트 박스에 넣는다.
	        $("option:selected", this).each(function(){
	            var selectValue = $(this).val(); //main category 에서 선택한 값
	            subCategorySelectBox.append("<option value=''>all</option>");
	            for(var i=0;i<subCategoryArray.length;i++){
	                if(selectValue == subCategoryArray[i].main_category_name){
	                     
	                    subCategorySelectBox.append("<option value='"+subCategoryArray[i].sub_category_name+"'>"+subCategoryArray[i].sub_category_name+"</option>");
	                     
	                }
	            }
	        });
	         
	    });
	    //*********** 1depth카테고리 선택 후 2depth 생성 END ***********
		$("form").submit(function(){
			if($("#board_name").val()==""){
				alert("이름을 입력 하세요?");
				$("#board_name").focus();
				return false;
			}
			if($("#board_pass").val()==""){
				alert("비밀번호를 입력 하세요?");
				$("#board_pass").focus();
				return false;
			}
			if($("#mainCategory").val()==""){
				alert("main카테고리를 선택해주세요");
				return false;
			}
			if($("#subCategory").val()==""){
				alert("sub카테고리를 선택해주세요");
				return false;
			}
			if($("#board_subject").val()==""){
				alert("제목을 입력 하세요?");
				$("#board_subject").focus();
				return false;
			}
			if($("#board_content").val()==""){
				alert("내용을 입력 하세요?");
				$("#board_content").focus();
				return false;
			}				
		});	
	});