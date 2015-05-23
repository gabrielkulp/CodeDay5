#pragma strict

function OnTriggerEnter2D (other : Collider2D) {
	if (other.tag == "Cancer") {
		audio.Play();
		other.GetComponent(typeof(Cancer)).Die();
		other.GetComponent(typeof(Cancer)).waiting = true;
		other.transform.parent = null;
	}
}