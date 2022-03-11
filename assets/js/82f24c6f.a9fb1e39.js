"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6094],{4137:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(t),p=r,y=u["".concat(l,".").concat(p)]||u[p]||m[p]||a;return t?o.createElement(y,s(s({ref:n},c),{},{components:t})):o.createElement(y,s({ref:n},c))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<a;d++)s[d]=t[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9463:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var o=t(7462),r=t(3366),a=(t(7294),t(4137)),s=["components"],i={sidebar_position:12,title:"GlossaryNode",sidebar_label:"GlossaryNode",slug:"/generated/metamodel/entities/glossarynode",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/generated/metamodel/entities/glossaryNode.md"},l="GlossaryNode",d={unversionedId:"docs/generated/metamodel/entities/glossaryNode",id:"docs/generated/metamodel/entities/glossaryNode",isDocsHomePage:!1,title:"GlossaryNode",description:"Aspects",source:"@site/genDocs/docs/generated/metamodel/entities/glossaryNode.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/glossarynode",permalink:"/docs/generated/metamodel/entities/glossarynode",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/generated/metamodel/entities/glossaryNode.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"GlossaryNode",sidebar_label:"GlossaryNode",slug:"/generated/metamodel/entities/glossarynode",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/generated/metamodel/entities/glossaryNode.md"},sidebar:"overviewSidebar",previous:{title:"GlossaryTerm",permalink:"/docs/generated/metamodel/entities/glossaryterm"},next:{title:"Assertion",permalink:"/docs/generated/metamodel/entities/assertion"}},c=[{value:"Aspects",id:"aspects",children:[{value:"glossaryNodeKey",id:"glossarynodekey",children:[],level:3},{value:"glossaryNodeInfo",id:"glossarynodeinfo",children:[],level:3},{value:"ownership",id:"ownership",children:[],level:3},{value:"status",id:"status",children:[],level:3}],level:2},{value:"Relationships",id:"relationships",children:[{value:"Outgoing",id:"outgoing",children:[],level:3}],level:2},{value:"Global Metadata Model",id:"global-metadata-model",children:[],level:2}],m={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"glossarynode"},"GlossaryNode"),(0,a.kt)("h2",{id:"aspects"},"Aspects"),(0,a.kt)("h3",{id:"glossarynodekey"},"glossaryNodeKey"),(0,a.kt)("p",null,"Key for a GlossaryNode"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "glossaryNodeKey"\n  },\n  "name": "GlossaryNodeKey",\n  "namespace": "com.linkedin.metadata.key",\n  "fields": [\n    {\n      "Searchable": {\n        "enableAutocomplete": true,\n        "fieldType": "TEXT_PARTIAL"\n      },\n      "type": "string",\n      "name": "name"\n    }\n  ],\n  "doc": "Key for a GlossaryNode"\n}\n'))),(0,a.kt)("h3",{id:"glossarynodeinfo"},"glossaryNodeInfo"),(0,a.kt)("p",null,"Properties associated with a GlossaryNode"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "glossaryNodeInfo"\n  },\n  "name": "GlossaryNodeInfo",\n  "namespace": "com.linkedin.glossary",\n  "fields": [\n    {\n      "Searchable": {},\n      "type": "string",\n      "name": "definition",\n      "doc": "Definition of business node"\n    },\n    {\n      "java": {\n        "class": "com.linkedin.common.urn.GlossaryNodeUrn"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "parentNode",\n      "default": null,\n      "doc": "Parent node of the glossary term"\n    }\n  ],\n  "doc": "Properties associated with a GlossaryNode"\n}\n'))),(0,a.kt)("h3",{id:"ownership"},"ownership"),(0,a.kt)("p",null,"Ownership information of an entity."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "ownership"\n  },\n  "name": "Ownership",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "Owner",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "Relationship": {\n                "entityTypes": [\n                  "corpUser",\n                  "corpGroup"\n                ],\n                "name": "OwnedBy"\n              },\n              "Searchable": {\n                "addToFilters": true,\n                "fieldName": "owners",\n                "fieldType": "URN",\n                "filterNameOverride": "Owned By",\n                "hasValuesFieldName": "hasOwners",\n                "queryByDefault": false\n              },\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": "string",\n              "name": "owner",\n              "doc": "Owner URN, e.g. urn:li:corpuser:ldap, urn:li:corpGroup:group_name, and urn:li:multiProduct:mp_name\\n(Caveat: only corpuser is currently supported in the frontend.)"\n            },\n            {\n              "type": {\n                "type": "enum",\n                "symbolDocs": {\n                  "CONSUMER": "A person, group, or service that consumes the data",\n                  "DATAOWNER": "A person or group that is owning the data",\n                  "DELEGATE": "A person or a group that overseas the operation, e.g. a DBA or SRE.",\n                  "DEVELOPER": "A person or group that is in charge of developing the code",\n                  "PRODUCER": "A person, group, or service that produces/generates the data",\n                  "STAKEHOLDER": "A person or a group that has direct business interest"\n                },\n                "name": "OwnershipType",\n                "namespace": "com.linkedin.common",\n                "symbols": [\n                  "DEVELOPER",\n                  "DATAOWNER",\n                  "DELEGATE",\n                  "PRODUCER",\n                  "CONSUMER",\n                  "STAKEHOLDER"\n                ],\n                "doc": "Owner category or owner role"\n              },\n              "name": "type",\n              "doc": "The type of the ownership"\n            },\n            {\n              "type": [\n                "null",\n                {\n                  "type": "record",\n                  "name": "OwnershipSource",\n                  "namespace": "com.linkedin.common",\n                  "fields": [\n                    {\n                      "type": {\n                        "type": "enum",\n                        "symbolDocs": {\n                          "AUDIT": "Auditing system or audit logs",\n                          "DATABASE": "Database, e.g. GRANTS table",\n                          "FILE_SYSTEM": "File system, e.g. file/directory owner",\n                          "ISSUE_TRACKING_SYSTEM": "Issue tracking system, e.g. Jira",\n                          "MANUAL": "Manually provided by a user",\n                          "OTHER": "Other sources",\n                          "SERVICE": "Other ownership-like service, e.g. Nuage, ACL service etc",\n                          "SOURCE_CONTROL": "SCM system, e.g. GIT, SVN"\n                        },\n                        "name": "OwnershipSourceType",\n                        "namespace": "com.linkedin.common",\n                        "symbols": [\n                          "AUDIT",\n                          "DATABASE",\n                          "FILE_SYSTEM",\n                          "ISSUE_TRACKING_SYSTEM",\n                          "MANUAL",\n                          "SERVICE",\n                          "SOURCE_CONTROL",\n                          "OTHER"\n                        ]\n                      },\n                      "name": "type",\n                      "doc": "The type of the source"\n                    },\n                    {\n                      "type": [\n                        "null",\n                        "string"\n                      ],\n                      "name": "url",\n                      "default": null,\n                      "doc": "A reference URL for the source"\n                    }\n                  ],\n                  "doc": "Source/provider of the ownership information"\n                }\n              ],\n              "name": "source",\n              "default": null,\n              "doc": "Source information for the ownership"\n            }\n          ],\n          "doc": "Ownership information"\n        }\n      },\n      "name": "owners",\n      "doc": "List of owners of the entity."\n    },\n    {\n      "type": {\n        "type": "record",\n        "name": "AuditStamp",\n        "namespace": "com.linkedin.common",\n        "fields": [\n          {\n            "type": "long",\n            "name": "time",\n            "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": "string",\n            "name": "actor",\n            "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "impersonator",\n            "default": null,\n            "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n          }\n        ],\n        "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n      },\n      "name": "lastModified",\n      "default": {\n        "actor": "urn:li:corpuser:unknown",\n        "impersonator": null,\n        "time": 0\n      },\n      "doc": "Audit stamp containing who last modified the record and when. A value of 0 in the time field indicates missing data."\n    }\n  ],\n  "doc": "Ownership information of an entity."\n}\n'))),(0,a.kt)("h3",{id:"status"},"status"),(0,a.kt)("p",null,"The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\nThis aspect is used to represent soft deletes conventionally."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "status"\n  },\n  "name": "Status",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "BOOLEAN"\n      },\n      "type": "boolean",\n      "name": "removed",\n      "default": false,\n      "doc": "Whether the entity has been removed (soft-deleted)."\n    }\n  ],\n  "doc": "The lifecycle status metadata of an entity, e.g. dataset, metric, feature, etc.\\nThis aspect is used to represent soft deletes conventionally."\n}\n'))),(0,a.kt)("h2",{id:"relationships"},"Relationships"),(0,a.kt)("h3",{id:"outgoing"},"Outgoing"),(0,a.kt)("p",null,"These are the relationships stored in this entity's aspects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"OwnedBy"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"CorpUser via ",(0,a.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,a.kt)("li",{parentName:"ul"},"CorpGroup via ",(0,a.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner"))))),(0,a.kt)("h2",{id:"global-metadata-model"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/linkedin/datahub/raw/master/docs/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/linkedin/datahub/raw/master/docs/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}u.isMDXComponent=!0}}]);