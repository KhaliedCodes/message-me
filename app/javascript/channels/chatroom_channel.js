import consumer from "./consumer"
//import scroll_bottom from "../packs/application"
consumer.subscriptions.create("ChatroomChannel", {
    connected() {
        // Called when the subscription is ready for use on the server
    },

    disconnected() {
        // Called when the subscription has been terminated by the server
    },

    received(data) {
        // Called when there's incoming data on the websocket for this channel
        //$('#message-container').append(data.foo);
        //alert(data.foo)
        var mydiv = document.getElementById("message-container");


        var newcontent = document.createElement('div');
        newcontent.innerHTML = data.mod_message;

        while (newcontent.firstChild) {
            mydiv.appendChild(newcontent.firstChild);
        }
        scroll_bottom()

    }
});