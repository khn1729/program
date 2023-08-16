document.getElementById('file-input').addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, { type: 'array' });

        var sheetName = workbook.SheetNames[0]; // 첫 번째 시트 이름을 가져옴
        var sheet = workbook.Sheets[sheetName];

        var table = document.getElementById('excel-table');
        table.innerHTML = '';

        var html = XLSX.utils.sheet_to_html(sheet); // 시트 내용을 HTML로 변환
        table.innerHTML = html;
    };

    reader.readAsArrayBuffer(file);
});