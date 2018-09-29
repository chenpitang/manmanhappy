			layui.use([ 'element', 'jquery', 'table','form', 'layedit', 'laydate'], function(){
			  var $ = layui.jquery
			  ,element = layui.element //Tab的切换功能，切换事件监听等，需要依赖element模块
			   ,table = layui.table
			   ,layedit = layui.layedit
			  ,laydate = layui.laydate;
			  //触发事件
			  var active = {
				tabAdd: function(){
				  //新增一个Tab项
				  element.tabAdd('demo', {
					title: '新选项'+ (Math.random()*1000|0) //用于演示
					,content: '内容'+ (Math.random()*1000|0)
					,id: new Date().getTime() //实际使用一般是规定好的id，这里以时间戳模拟下
				  })
				}
				,tabDelete: function(othis){
				  //删除指定Tab项
				  element.tabDelete('demo', '44'); //删除：“商品管理”
				  
				  
				  othis.addClass('layui-btn-disabled');
				}
				,tabChange: function(){
				  //切换到指定Tab项
				  element.tabChange('demo', '22'); //切换到：用户管理
				}
			  };
			  
			  $('.site-demo-active').on('click', function(){
				var othis = $(this), type = othis.data('type');
				active[type] ? active[type].call(this, othis) : '';
			  });
			  
			  //Hash地址的定位
			  var layid = location.hash.replace(/^#test=/, '');
			  element.tabChange('test', layid);
			  
			  element.on('tab(test)', function(elem){
				location.hash = 'test='+ $(this).attr('lay-id');
			  });
			  
			   
			  //方法级渲染
			  table.render({
				elem: '#taskall',
				url: '../datajson/taskall.json',
				cols: [[
				  {checkbox: true, fixed: true}
				  ,{field:'a_classification', title: '任务分类',width:140, sort: true}
				  ,{field:'a_business', title: '业务单号', width:180, sort: true}
				  ,{field:'a_username', title: '企业主体', width:200}
				  ,{field:'a_seque', title: '封单状态', width:120}
				  ,{field:'a_images', title: '影像状态', width:120}
				  ,{field:'a_examine', title: '调阅审核', width:120}
				  ,{field:'a_source', title: '任务创建方式', width:120}
				  ,{field:'a_imgsource', title: '影像采集来源', width:120}
				  ,{field:'a_mentionn', title: '提单人编号', width:120}
				  ,{field:'a_mention', title: '提单人', width:120}
				  ,{field:'a_mentiont', title: '提单时间', width:140}
				  ,{field:'a_state', title: '任务状态', sort: true, width:120}
				  ,{field:'a_remarks', title: '备注'}
				  ,{field:'a_id', title: '任务流水号', width:120}
				]]
				,id: 'testReload'
				,page: true
				
			  });
			  
			  table.render({
				elem: '#image_task',
				url: '../datajson/taskcon.json',
				toolbar: '#tool_image_task',
				cols: [[
				  {checkbox: true, fixed: true}
				  ,{field:'b_id', title: '序号', width:140, sort: true, fixed: true}
				  ,{field:'b_username', title: '影像类型'}
				  ,{field:'b_seque', title: '影像格式', width:140}
				  ,{field:'b_cmode', title: '采集方式'}
				  ,{field:'b_ccode', title: '采集编号'}
				  ,{field:'b_collector', title: '采集人', width:140}
				  ,{field:'b_ctime', title: '采集时间'}
				]]
				,id: 'testReload'
				,page: true
				
			  });
			  
			  $(".isShow").show();
			  table.render({
				elem: '#invItemDiv',
				url: '../datajson/imagetext.json',
				toolbar: '#tool_invItemDiv',
				cols: [[
				  {checkbox: true, fixed: true}
				  ,{field:'invItemGrid_id', title: '序号', width:80, sort: true, fixed: true}
				  ,{field:'invItemGrid_itemName', title: '名称', width:140}
				  ,{field:'jqgh_invItemGrid_itemSpec', title: '规格型号', width:160}
				  ,{field:'jqgh_invItemGrid_unit', title: '单位', width:220}
				  ,{field:'jqgh_invItemGrid_itemQuantity', title: '数量', width:80}
				  ,{field:'jqgh_invItemGrid_itemPrice', title: '单价', sort: true, width:120}
				  ,{field:'jqgh_invItemGrid_itemAmount', title: '金额', width:120}
				  ,{field:'jqgh_invItemGrid_itemTaxRate', title: '税率', width:80}
				  ,{field:'jqgh_invItemGrid_itemTax', title: '税额', width:120}
				  ,{field:'jqgh_invItemGrid_undefined', title: '操作', toolbar: '#bar_invItemDiv', width:120}
				]]
				,id: 'testReload'
				,page: true
				
			  });
			  $(".isShow").hide();
			  table.on('toolbar(tool_invItemDiv)', function(obj){
				
			  });
			  
			  table.render({
				elem: '#detailed_task',
				url: '../datajson/invoicedata.json',
				toolbar: '#tool_detailed_task',
				cols: [[
				  {checkbox: true, fixed: true}
				  ,{field:'edocNo', title: '业务单号', width:220, sort: true, fixed: true}
				  ,{field:'bizTypeCode', title: '业务类型', width:180}
				  ,{field:'billTypeCode', title: '单证类型', width:180}
				  ,{field:'invCode', title: '发票代码', width:160}
				  ,{field:'invNo', title: '发票号码', width:180}
				  ,{field:'invDate', title: '发票日期', sort: true, width:180}
				  ,{field:'checkcode', title: '校验码（后六位）', width:140}
				  ,{field:'truestate', title: '验真状态', width:160}
				  ,{field:'trueresuits', title: '验真结果', width:160}
				  ,{field:'truesummary', title: '验真摘要', width:220}
				  ,{field:'authstate', title: '认证状态', width:160}
				  ,{field:'authresuits', title: '认证结果', width:160}
				  ,{field:'authsummary', title: '认证摘要', width:220}
				  ,{field:'bankauth', title: '抵账库认证结果', width:180}
				  ,{field:'bankmatch', title: '抵账库匹配', width:180}
				  ,{field:'buyerName', title: '购方名称', width:220}
				  ,{field:'buyerTaxCode', title: '购方税号', width:220}
				  ,{field:'salerName', title: '销方名称', width:220}
				  ,{field:'salerTaxCode', title: '销方税号', width:220}
				  ,{field:'invAmount', title: '金额（不含税）', sort: true, width:140}
				  ,{field:'invTax', title: '税额', width:140}
				  ,{field:'invTotal', title: '价税合计', width:140}
				  ,{field:'remarks', title: '备注', width:160}
				]]
				
				,page: true
				
			  });
			
			  //监听行单击事件（单击事件为：rowDouble）
			  table.on('row(detailed_task)', function(obj){
			
				var data = obj.data;
				layer.open ({
				  title:false
				  ,content:'<div class="layui-tab layui-tab-card " lay-filter="tab1"><ul class="layui-tab-title"><li class="layui-this">发票详情</li><li>发票影像</li></ul><div class="layui-tab-content" style="min-height: 100px;"><div class="layui-tab-item  layui-show"><form class="layui-form"><div class="layui-card-header">发票</div><table class="layui-table detail_invoice"><colgroup><col width="50"><col width="140"><col width="320"><col width="50"><col width="140"><col width="320"></colgroup><tbody><tr><th colspan="2">发票代码：</th><td>1100162130</td><th colspan="2">发票号码：</th><td>03387121</td></tr><tr><th colspan="2">发票类型：</th><td>增值税普通发票</td><th colspan="2">发票日期：</th><td>2017-05-05</td></tr><tr><th colspan="2">金额（不含税）：</th><td>5582.83</td><th colspan="2">税额：</th><td>334.97</td></tr><tr><th colspan="2">价税合计：</th><td>5917.80</td><th colspan="2">校验码（后六位）：</th><td>038721</td></tr><tr><th rowspan="4">购</br>货</br>单</br>位</th><th>名称：</th><td>北京奇付通科技有限公司</td><th rowspan="4">销</br>货</br>单</br>位</th><th>名称：</th><td>北京奇付通科技有限公司</td></tr><tr><th>纳税人识别号：</th><td>91110000590667306X</td><th>纳税人识别号：</th><td>91110000590667306X</td></tr><tr><th>地址、电话：</th><td></td><th>地址、电话：</th><td></td></tr><tr><th>开户行及账号：</th><td></td><th>开户行及账号：</th><td></td></tr><tr><th colspan="2">备注：</th><td colspan="4">红豆沙就会打开手机啊</td></tr></tbody></table><div class="layui-card-header">明细</div><table class="layui-table detail_invoice2"><tr><th>商品名称</th><th>规格型号</th><th>计量单位</th><th>数量</th><th>单价</th><th>税率</th><th>金额</th><th>税额</th></tr><tr><td>化学药品XXXXX</td><td>5ml；5mg</td><td>瓶</td><td>2</td><td>31.035</td><td>0.16</td><td>62.07</td><td>9.93</td></tr></table><div class="layui-card-header">状态</div><table class="layui-table detail_invoice2"><tr><th>验真状态</th><th>验真结果</th><th>验真摘要</th><th>认证状态</th><th>认证结果</th><th>认证摘要</th><th>抵账库认证结果</th><th>抵账库匹配</th></tr><tr><td>已验证</td><td>存疑</td><td>发票影像模糊</td><td>未认证</td><td></td><td></td><td></td><td></td></tr></table></form></div><div class="layui-tab-item detail_image"><img src="../../static/admin/images/2.jpg"></div></div></div>'
				});
				
			  });
			  
			  table.render({
				elem: '#taskagency',
				url: '../datajson/taskagency.json',
				cols: [[
				  {checkbox: true, fixed: true}
				  ,{field:'jqgh_todoTaskGrid_edocNo', title: '单证编号', sort: true, fixed: true}
				  ,{field:'jqgh_todoTaskGrid_edocTaskStatus', title: '影像状态', width:220}
				  ,{field:'jqgh_todoTaskGrid_sysFlag', title: '数据来源', width:220}
				  ,{field:'jqgh_todoTaskGrid_edocType', title: '业务类型', width:220}
				  ,{field:'jqgh_todoTaskGrid_taskCreateTime', title: '创建时间', width:280}
				]]
				,id: 'testReload'
				,page: true
				
			  });
			  table.render({
				elem: '#taskcomp',
				url: '../datajson/taskcomp.json',
				cols: [[
				  {checkbox: true, fixed: true}
				  ,{field:'jqgh_workDoneGrid_edocNo', title: '单证编号', sort: true, fixed: true}
				  ,{field:'jqgh_workDoneGrid_taskName', title: '任务名称', width:220}
				  ,{field:'jqgh_workDoneGrid_taskAssingee', title: '任务责任人', width:220}
				  ,{field:'jqgh_workDoneGrid_edocType', title: '单证类型', width:220}
				  ,{field:'jqgh_workDoneGrid_createTime', title: '创建时间', width:280}
				  ,{field:'jqgh_workDoneGrid_description', title: '任务描述', width:280}
				]]
				,id: 'testReload'
				,page: true
				
			  });
			  table.render({
				elem: '#invpool',
				url: '../datajson/invpool.json',
				cols: [[
				  {checkbox: true, fixed: true}
				  ,{field:'jqgh_invoiceGrid_invType', title: '发票类型', width:220, sort: true, fixed: true}
				  ,{field:'jqgh_invoiceGrid_invCode', title: '发票代码', width:220}
				  ,{field:'jqgh_invoiceGrid_invNo', title: '发票号码', width:220}
				  ,{field:'jqgh_invoiceGrid_invDate', title: '发票日期', width:220}
				  ,{field:'jqgh_invoiceGrid_invAmount', title: '金额', width:160}
				  ,{field:'jqgh_invoiceGrid_invTax', title: '税额', width:160}
				  ,{field:'jqgh_invoiceGrid_invTotal', title: '价税合计', width:160}
				  ,{field:'jqgh_invoiceGrid_buyerTaxCode', title: '购方公司税号', width:280}
				  ,{field:'jqgh_invoiceGrid_buyerName', title: '购方公司名称', width:280}
				  ,{field:'jqgh_invoiceGrid_salerTaxCode', title: '销方公司税号', width:280}
				  ,{field:'jqgh_invoiceGrid_salerName', title: '销方公司名称', width:280}
				  ,{field:'jqgh_invoiceGrid_checkStatus', title: '规则校验结果', width:220}
				  ,{field:'jqgh_invoiceGrid_extField1', title: '冲突单据', width:220}
				  ,{field:'jqgh_invoiceGrid_checkDetails', title: '真伪校验结果', width:220}
				  ,{field:'jqgh_invoiceGrid_checkTime', title: '真伪校验时间', width:220}
				  ,{field:'jqgh_invoiceGrid_extField2', title: '真伪校验描述', width:280}
				  ,{field:'jqgh_invoiceGrid_undefined', title: '操作', width:220}
				]]
				,id: 'testReload'
				,page: true
				
			  });
			  table.render({
				elem: '#inputtax',
				url: '../datajson/inputtax.json',
				cols: [[
				  {checkbox: true, fixed: true}
				  ,{field:'jqgh_invoiceGrid_edocNo', title: '单据编码', width:220, sort: true, fixed: true}
				  ,{field:'jqgh_invoiceGrid_costType', title: '费用类型', width:220}
				  ,{field:'jqgh_invoiceGrid_invNo', title: '部门', width:220}
				  ,{field:'jqgh_invoiceGrid_invDate', title: '发票类型', width:220}
				  ,{field:'jqgh_invoiceGrid_invAmount', title: '发票代码', width:160}
				  ,{field:'jqgh_invoiceGrid_invTax', title: '发票号码', width:160}
				  ,{field:'jqgh_invoiceGrid_invDate', title: '开票日期', width:160}
				  ,{field:'jqgh_invoiceGrid_buyerName', title: '购方公司名称', width:280}
				  ,{field:'jqgh_invoiceGrid_buyerTaxCode', title: '购方公司税号', width:280}
				  ,{field:'jqgh_invoiceGrid_salerName', title: '销方公司名称', width:280}
				  ,{field:'jqgh_invoiceGrid_salerTaxCode', title: '销方公司税号', width:280}
				  ,{field:'jqgh_invoiceGrid_invAmount', title: '不含税金额', width:220}
				  ,{field:'jqgh_invoiceGrid_invTax', title: '税额', width:220}
				  ,{field:'jqgh_invoiceGrid_invTotal', title: '价税合计', width:220}
				  ,{field:'jqgh_invoiceGrid_remarks', title: '备注栏', width:220}
				  ,{field:'jqgh_invoiceGrid_checkDetails', title: '验真结果', width:280}
				  ,{field:'jqgh_invoiceGrid_checkCertification', title: '认证结果', width:220}
				  ,{field:'jqgh_invoiceGrid_extField3', title: '实际报销价税', width:280}
				  ,{field:'jqgh_invoiceGrid_extField5', title: '实际报销税额', width:220}
				]]
				,id: 'testReload'
				,page: true
				
			  });
			  table.render({
				elem: '#invoice_pool',
				url: '../datajson/invoicedata.json',
				toolbar: '#invoice_pool',
				cols: [[
				  {checkbox: true, fixed: true}
				  ,{field:'edocNo', title: '业务单号', width:220, sort: true, fixed: true}
				  ,{field:'bizTypeCode', title: '业务类型', width:180}
				  ,{field:'billTypeCode', title: '单证类型', width:180}
				  ,{field:'importsales', title: '进项/销项', width:180}
				  ,{field:'invCode', title: '发票代码', width:160}
				  ,{field:'invNo', title: '发票号码', width:180}
				  ,{field:'invDate', title: '发票日期', sort: true, width:180}
				  ,{field:'checkcode', title: '校验码（后六位）', width:140}
				  ,{field:'truestate', title: '验真状态', width:160}
				  ,{field:'trueresuits', title: '验真结果', width:160}
				  ,{field:'truesummary', title: '验真摘要', width:220}
				  ,{field:'authstate', title: '认证状态', width:160}
				  ,{field:'authresuits', title: '认证结果', width:160}
				  ,{field:'authsummary', title: '认证摘要', width:220}
				  ,{field:'bankauth', title: '抵账库认证结果', width:180}
				  ,{field:'bankmatch', title: '抵账库匹配', width:180}
				  ,{field:'buyerName', title: '购方名称', width:220}
				  ,{field:'buyerTaxCode', title: '购方税号', width:220}
				  ,{field:'salerName', title: '销方名称', width:220}
				  ,{field:'salerTaxCode', title: '销方税号', width:220}
				  ,{field:'invAmount', title: '金额（不含税）', sort: true, width:140}
				  ,{field:'invTax', title: '税额', width:140}
				  ,{field:'invTotal', title: '价税合计', width:140}
				  ,{field:'remarks', title: '备注', width:160}
				]]
				
				,page: true
				
			  });
			 
			  var $ = layui.$, active = {
				reload: function(){
				  var demoReload = $('#demoReload');
				  
				  //执行重载
				  table.reload('testReload', {
					page: {
					  curr: 1 //重新从第 1 页开始
					}
					,where: {
					  key: {
						id: demoReload.val()
					  }
					}
				  });
				}
			  };
			  
			  $('.demoTable .layui-btn').on('click', function(){
				var type = $(this).data('type');
				active[type] ? active[type].call(this) : '';
			  });
			  
			  //监听表格复选框选择
			  table.on('checkbox(demo)', function(obj){
				console.log(obj)
			  });
			  //监听工具条
			  table.on('tool(invItemDiv)', function(obj){
				var data = obj.data;
				if(obj.event === 'detail'){
				  layer.msg('ID：'+ data.id + ' 的查看操作');
				} else if(obj.event === 'del'){
				  layer.confirm('真的删除行么', function(index){
					obj.del();
					layer.close(index);
				  });
				} else if(obj.event === 'edit'){
				  layer.alert('编辑行：<br>'+ JSON.stringify(data))
				}
			  });
			  
			  table.on('toolbar(image_task)', function(obj){
				var checkStatus = table.checkStatus(obj.config.id);
				switch(obj.event){
					case 'delete':
					layer.msg('删除');
					break;
					
				}
			  });
			  
			  var $ = layui.$, active = {
				getCheckData: function(){ //获取选中数据
				  var checkStatus = table.checkStatus('idTest')
				  ,data = checkStatus.data;
				  layer.alert(JSON.stringify(data));
				}
				,getCheckLength: function(){ //获取选中数目
				  var checkStatus = table.checkStatus('idTest')
				  ,data = checkStatus.data;
				  layer.msg('选中了：'+ data.length + ' 个');
				}
				,isAll: function(){ //验证是否全选
				  var checkStatus = table.checkStatus('idTest');
				  layer.msg(checkStatus.isAll ? '全选': '未全选')
				}
			  };
			  
			  $('.demoTable .layui-btn').on('click', function(){
				var type = $(this).data('type');
				active[type] ? active[type].call(this) : '';
			  });
			   //日期
			  laydate.render({
				elem: '#a_mentiont'
			  });
			  laydate.render({
				elem: '#date2'
			  });
			  laydate.render({
				elem: '#invDate'
			  });
			  
			
			});
			
		$("#imgshow_hide").click(function(e) {
				$(".imgshow_hide").toggle();
			});
			
			
			