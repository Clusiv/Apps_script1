function myFunction(val) {
  var ss = SpreadsheetApp.getActiveSpreadsheet()

  // Исходный лист
  var sheet1 = ss.getSheetByName('Лист1')

  // Лист куда переносим
  var sheet2 = ss.getSheetByName('Лист2')

  // Искомое слово
  var find = 'Imran'

  // Столбец
  var columnNum = 4

  let findingRange = sheet1.getDataRange().getValues()

  // Переборка, фильтрация
  // findingRange.forEach(function(row) {
  //   if (row[columnNum] === find) {
  //     sheet1.deleteRow()
  //     row.shift()
  //     // Добавить в конец
  //     // sheet2.appendRow(row)

  //     // Добавить в начало
  //     sheet2.insertRowBefore(1)
  //     sheet2.getRange(1, 1, 1, row.length).setValues([row])

  //     // Лог строк
  //     Logger.log(row)
  //   }
  // })

    for (var i=findingRange.length - 1; i >= 0 ; i--){
      row = findingRange[i]
      if (row[columnNum] === find) {

        sheet1.deleteRow(i + 1)
        row[0] = null

        // Добавить в начало
        sheet2.insertRowBefore(1)
        sheet2.getRange(1, 1, 1, row.length).setValues([row])
    }
    }
}
