(function () {
	/**
	 * @description 引号转义符号
	 * @type {String}
	 */
	String.EscapeChar = '\'';

	/**
	 * @description 替换所有字符串
	 * @param {String} searchValue 检索值
	 * @param {String} replaceValue 替换值
	 * @return {String}
	 */
	String.prototype.replaceAll = function (searchValue, replaceValue) {
		var regExp = new RegExp(searchValue, "g");
		return this.replace(regExp, replaceValue);
	}
	
	/**
	 * @description 格式化字符串
	 * @return {String}
	 */
	String.prototype.format = function () {
		var regexp = /\{(\d+)\}/g;
		var args = arguments;
		var result = this.replace(regexp, function (m, i, o, n) {
			return args[i];
		});
		return result.replaceAll('%', String.EscapeChar);
	}
})();

