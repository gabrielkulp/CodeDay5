#pragma strict

var tweezers : Texture2D;
var mousePos : Vector2;
var mousePos3 : Vector3;
var relativePos : Vector3;
var dragging : boolean;
var text : Texture2D;

function Start () {
	audio.Play();
	Screen.showCursor = false;
}

function Update () {
	mousePos3 = Camera.main.ScreenPointToRay(Input.mousePosition).origin;
	mousePos3.z = 0;
	mousePos = Vector2(mousePos3.x,mousePos3.y);
	
	if (Input.GetMouseButtonDown(0) && collider2D.OverlapPoint(mousePos)) {
		relativePos = mousePos3 - transform.position;
		dragging = true;
	}
	if (Input.GetMouseButtonUp(0))
		dragging = false;
	if (dragging) {
		transform.position = mousePos3 - relativePos;
		
	}
}

function OnGUI () {
	GUI.DrawTexture(Rect(Input.mousePosition.x,-Input.mousePosition.y+Screen.height-tweezers.height/3,tweezers.width/3,tweezers.height/3),tweezers);
	GUI.DrawTexture(Rect((Screen.width-text.width)/2,Screen.height-text.height,text.width,text.height),text);
}