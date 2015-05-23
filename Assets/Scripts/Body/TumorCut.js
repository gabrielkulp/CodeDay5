#pragma strict

var bound : Collider2D;
var cutting : boolean;
var scalpel : Texture2D;
var mousePos : Vector2;
var mousePos3 : Vector3;
var splatter : GameObject;
var touchHelper : GameObject;
var helperPoints : boolean[];
var cut : boolean;
var text : Texture2D;

function Start () {
	Screen.showCursor = false;
	PlayerPrefs.SetInt("lastLevel",1);
}

function Update () {
	mousePos3 = Camera.main.ScreenPointToRay(Input.mousePosition).origin;
	mousePos3.z = 0;
	mousePos = Vector2(mousePos3.x,mousePos3.y);
	if (cut)
		return;
	
	if (Input.GetMouseButtonUp(0) || Input.GetMouseButtonDown(0)) {
		cutting = Input.GetMouseButton(0);
		for (var i : int = 0; i < helperPoints.length; i++){
    		helperPoints[i] = false;
		}
	}
	if (cutting) {
		cut = true;
		if (!bound.OverlapPoint(mousePos)) {
			cutting = false;
			cut = false;	
		}
		for (i = 0; i < helperPoints.length; i++){
    		if (!helperPoints[i])
    			cut = false;
		}
		if (cut)
			Cut();
	}
}

function OnGUI () {
	GUI.DrawTexture(Rect(Input.mousePosition.x,-Input.mousePosition.y+Screen.height-scalpel.height/5,scalpel.width/5,scalpel.height/5),scalpel);
	GUI.DrawTexture(Rect((Screen.width-text.width)/2,Screen.height-text.height,text.width,text.height),text);
	splatter.SetActive(cutting);
	splatter.transform.position.x = mousePos.x;
	splatter.transform.position.y = mousePos.y;
}

function Cut () {
	transform.GetChild(0).transform.localPosition += Vector3(2,2,0);
	transform.GetChild(0).GetComponent(typeof(TumorDrag)).enabled = true;
	splatter.SetActive(false);
	this.enabled = false;
}