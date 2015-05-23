#pragma strict

var finished : boolean[];
var progress : int;

function Start () {
	Screen.showCursor = true;
	if (PlayerPrefs.GetInt("ADone",0)==1) {
		finished[0] = true;
		GameObject.Find("A").SetActive(false);
	}
	if (PlayerPrefs.GetInt("BDone",0)==1) {
		finished[1] = true;
		GameObject.Find("B").SetActive(false);
	}
	if (PlayerPrefs.GetInt("CDone",0)==1) {
		finished[2] = true;
		GameObject.Find("C").SetActive(false);
	}
	PlayerPrefs.SetInt("lastLevel",2);
	for (var i : int = 0; i<3; i++) {
		if (finished[i])
			progress ++;
	}
	PlayerPrefs.SetInt("count",progress);
}