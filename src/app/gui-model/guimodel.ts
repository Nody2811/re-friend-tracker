export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden
    */

    private _guiModel = {
        "application": {
            "title": "Fadel and Ifi`s Friend Tracker",
            "formList": [
                {
                    "id": "Activity",
                    "title": "Activities",
                    "url": "/Activity",
                    "formFieldList": [
                    {
                    "id": "name",
                    "type": "text",
                    "name": "ActivityName",
                    "width": 2,
                    "required": true
                    },
                    {
                        "id": "comment",
                        "type": "text",
                        "name": "Comments",
                        "width": 2,
                        "height": 4,
                        "maxLength": 5000,
                    },
                    {
                        "id": "Location",
                        "type": "autocomplete",
                        "name": "Location",
                        "url": "/location",
                        "form": "LocationForm",
                        "width": 2
                       },
                    {
                        "id": "Name",
                        "type": "text",
                        "name": "Name",
                        "width": 2,
                        "height": 2,
                        "maxLength": 30,
                    },
                    {
                    "type": "deleteButton",
                    "name": "Delete"
                    },
                    {
                    "type": "cancelButton",
                    "name": "Cancel"
                    },
                    {
                    "type": "okButton",
                    "name": "Ok"
                    }
                    ]
                   },
                   
                {
                    "id": "GroupForm",
                    "title": "Group",
                    "url": "/group",
                    "formFieldList": [
                    {
                    "id": "name",
                    "type": "text",
                    "name": "GroupName",
                    "width": 2,
                    "required": true
                    },
                    {
                        "id": "Creation Date",
                        "type": "date",
                        "name": "Creation Date",
                        "width": 2
                    },
                    {
                        "id": "comment",
                        "type": "text",
                        "name": "Comments",
                        "width": 2,
                        "height": 4,
                        "maxLength": 5000,
                    },
                    {
                    "type": "deleteButton",
                    "name": "Delete"
                    },
                    {
                    "type": "cancelButton",
                    "name": "Cancel"
                    },
                    {
                    "type": "okButton",
                    "name": "Ok"
                    }
                    ]
                   },
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "url": "/friend",
                    "friend activity":"/friend/:friendKey/activity",

                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "group",
                            "type": "autocomplete",
                            "name": "Group",
                            "url": "/group",
                            "form": "GroupForm",
                            "width": 2
                           },
                           {
                            "id": "Activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/Activity",
                            "form": "Activity",
                            "width": 2
                           },

                        {
                            "id": "nickname",
                            "type": "text",
                            "name": "Nickname",
                            "width": 2,
                            "required": true
                           },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "birthdate",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "url": "/location",
                    "Location Activity": "/location/:locationKey/activity",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        
                        
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "AddActivityForm",
                    "title": "Activity",
                    "activity friend": "/activity/:activityKey/friend",
                    "url": "/friend/:friendKey/activity",

                    "formFieldList": [
                        {
                            "id":   "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",
                            "defaultKey": "activityKey",
                            "readonly": true,
                            "form": "ActivityForm",
                            "width": 2
                        },
                        {
                            "id": "Name",
                            "type": "text",
                            "name": "Name",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
            ],
            "pageList": [
                {
                    "id": "groupspage",
                    "elementList": [
                    {
                    "type": "backbutton",
                    },
                    
                    
                    {
                        "id": "comment",
                        "type": "text",
                        "name": "Comments",
                        "width": 2,
                        "height": 4,
                        "maxLength": 5000,
                    },
                       {
                        "id": "Creation Date",
                        "type": "date",
                        "name": "Creation Date",
                        "width": 2
                    },
                    {
                        "type": "list",
                        "icon": "fa-weixin",
                        "color": "wisteria",
                        "search": true,
                        "url": "/group",
                        "form": {
                        "form": "GroupForm"
                        }
                        },
                        
                    {
                    "type": "newButton",
                    "name": "NewGroup",
                    "icon": "fa-weixin",
                    "color": "green",
                    "form": {
                    "form": "GroupForm"
                    }
                    }
                    ]
                   },
                   
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Activities",
                            "icon": "fa-weixin",
                            "color": "wisteria",
                            "page": "Activity",
                           },
                        
                        {
                            "type": "button",
                            "name": "Groups",
                            "icon": "fa-weixin",
                            "color": "wisteria",
                            "page": "groupspage",
                           },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-cubes",
                            "color": "yellow",
                            "page": "locationspage",
                        },
                    ]
                },
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "url": "/friend",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                    ]
                },
                {
                    "id": "Activity",
                    "elementList": [
                    {
                    "type": "backbutton",
                    },
                    {
                    "type": "newButton",
                    "name": "NewActivity",
                    "icon": "fa-weixin",
                    "color": "green",
                    "form": {
                    "form": "Activity"
                    }
                    }
                    ]
                   },
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "url": "/location",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                    ]
                },
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
