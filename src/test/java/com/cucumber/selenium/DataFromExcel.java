package com.cucumber.selenium;

import java.io.File;
import java.io.FileInputStream;
import java.util.Iterator;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class DataFromExcel {

	static String newvalue = null;

	public static String read_data() throws Exception {
		try {
			FileInputStream file = new FileInputStream(
					new File("/home/baskaran/cucumberselenium/CucumberSelenium/test_data/test.xlsx"));
			// Create Workbook instance holding reference to .xlsx file
			XSSFWorkbook workbook = new XSSFWorkbook(file);
			// Get first/desired sheet from the workbook
			XSSFSheet sheet = workbook.getSheetAt(0);
			// Iterate through each rows one by one
			Iterator<Row> rowIterator = sheet.iterator();

			StringBuilder sb = new StringBuilder();
			Integer complete = 0;
			while (rowIterator.hasNext()) {
				Row row = rowIterator.next();
				// For each row, iterate through all the columns
				Iterator<Cell> cellIterator = row.cellIterator();
				while (cellIterator.hasNext()) {
					Cell cell = cellIterator.next();
					// Check the cell type and format accordingly
					switch (cell.getCellType()) {
					case Cell.CELL_TYPE_NUMERIC:
						// System.out.print(cell.getNumericCellValue());
						complete = (int) cell.getNumericCellValue();
						complete.toString();
						break;
					case Cell.CELL_TYPE_STRING:
						// System.out.print(cell.getStringCellValue());
						sb.append(cell.getStringCellValue());
						break;
					}

					sb.append("|||");

				}
				// System.out.println(complete.toString());
				newvalue = sb.toString();
				System.out.println(newvalue);
				// System.out.println("");
			}
			file.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return newvalue;

	}

//	public static void main(String[] args) throws Throwable {
//
//		read_data();
//	}

}