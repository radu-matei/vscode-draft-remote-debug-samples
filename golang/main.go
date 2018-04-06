package main

import (
	"fmt"
	"net/http"
	"os"
)

func handler(w http.ResponseWriter, r *http.Request) {
	n, _ := os.Hostname()
	fmt.Fprintf(w, "Draft is really cool! I am on %s!", n)
}

func main() {
	http.HandleFunc("/", handler)
	http.ListenAndServe(":8080", nil)
}
