const accounts = `x@hotmail.com	xxxx	chehao`;


// 拆分每一行的分隔符默认\n
const rowSeparator = '\n';
// 拆分每一列的分隔符默认\n
const colSeparator = '\t';
// 每个账号休息间隔时间默认5000毫秒;
const sleepTime = 5000;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function handleInput(inputElement,value){
	inputElement.value = value;
	var event = new Event('input', {
	    bubbles: true,
	    cancelable: true,
	});
	inputElement.dispatchEvent(event);
}

async function batchInsertAccounts(){
	// 拆分账号信息
	const rows = accounts.split(rowSeparator);
	for (let i = 0; i < rows.length; i++) {
		document.querySelector('.el-button.el-button--primary').click();
		await sleep(sleepTime);
		const cols = rows[i].split(colSeparator);
    const carInput = document.querySelector('[placeholder="请填写车号"]');
		const emailInput = document.querySelector('[placeholder="请填写邮箱"]');
		const passwordInput = document.querySelector('[placeholder="请填写密码"]');
		handleInput(emailInput,cols[0]);
		handleInput(passwordInput,cols[1]);
        handleInput(carInput,cols[2]);
		document.querySelector('.el-button.el-button--success').click();
		await sleep(sleepTime);
		console.log('第'+(i+1)+'个账号添加成功');
	}
	console.log('所有账号添加成功');
}
batchInsertAccounts();
