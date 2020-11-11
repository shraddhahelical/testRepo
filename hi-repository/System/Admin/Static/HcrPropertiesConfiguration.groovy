import com.helicalinsight.export.ExportUtils;
import com.helicalinsight.efw.ApplicationProperties;
import java.io.File;
import groovy.json.*;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
String parentPath = ApplicationProperties.getInstance().getSystemDirectory() + File.separator + "Admin" + File.separator;
String diagram = ExportUtils.getFileAsString(parentPath+ "Static"+ File.separator + "diagramCanvas"+ExportUtils.JSON_EXTENSION)
String textField = ExportUtils.getFileAsString(parentPath+ "Static"+ File.separator + "textField"+ExportUtils.JSON_EXTENSION)
String field = ExportUtils.getFileAsString(parentPath+"Static"+ File.separator +"field"+ExportUtils.JSON_EXTENSION)
String image = ExportUtils.getFileAsString(parentPath+"Static"+ File.separator +"image"+ExportUtils.JSON_EXTENSION)
String basicLine=ExportUtils.getFileAsString(parentPath+"Static"+ File.separator +"basicLine"+ExportUtils.JSON_EXTENSION)
String tooltipInfo=ExportUtils.getFileAsString(parentPath+"Static"+ File.separator +"tooltipInfo"+ExportUtils.JSON_EXTENSION)

JSONObject diagramJson = JSONObject.fromObject(diagram);
JSONObject textFieldJson = JSONObject.fromObject(textField);
JSONObject fieldJson = JSONObject.fromObject(field);
JSONObject basicLineJson = JSONObject.fromObject(basicLine);
JSONObject imageJson = JSONObject.fromObject(image);
JSONObject tooltipInfoJson = JSONObject.fromObject(tooltipInfo);
JSONObject finalObj = new JSONObject();
finalObj.put("diagramCanvas",diagramJson);
finalObj.put("textField",textFieldJson);
finalObj.put("field",fieldJson);
finalObj.put("basicLine",basicLineJson);
finalObj.put("image",imageJson);
finalObj.put("tooltipInfo",tooltipInfoJson);
return finalObj