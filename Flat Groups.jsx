var parent = app.activeDocument.activeLayer.parent;
var sets = parent.layerSets;

while (sets.length){
	sets[0].merge();
}