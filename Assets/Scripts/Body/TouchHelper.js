#pragma strict

function Update () {
	var mousePos = Vector2(Camera.main.ScreenPointToRay(Input.mousePosition).origin.x,Camera.main.ScreenPointToRay(Input.mousePosition).origin.y);
	if (collider2D.OverlapPoint(mousePos))
		transform.parent.parent.GetComponent(typeof(TumorCut)).helperPoints[transform.GetSiblingIndex()] = true;
}