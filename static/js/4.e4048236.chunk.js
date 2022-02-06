(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{133:function(t,e,a){t.exports={contact_form:"ContactForm_contact_form__29gkj",label:"ContactForm_label__1YvKk",input:"ContactForm_input__axz11",submit:"ContactForm_submit__1dRN8"}},135:function(t,e,a){t.exports={main:"Contacts_main__FqjJe",search:"Contacts_search__2Y_z2",form:"Contacts_form__27-nq"}},136:function(t,e,a){t.exports={label:"Filter_label__FK2M8",input:"Filter_input__2Pv-R"}},137:function(t,e,a){t.exports={list:"ContactList_list__3j_v3",item:"ContactList_item__NmjqZ",btn:"ContactList_btn__3jf-A",span:"ContactList_span__27WuM"}},153:function(t,e,a){"use strict";a.r(e);var n=a(68),c=a(20),s=a(0),r=a(24),o=a(133),i=a.n(o),l=a(58),u=a(126),b=a(152),m=a(147),j=a(151),d=a(5),p={"aria-label":"description"},f=function(t){var e=t.onSubmit,a=Object(r.c)(l.c.getContacts),o=Object(s.useState)(""),f=Object(c.a)(o,2),_=f[0],h=f[1],O=Object(s.useState)(""),x=Object(c.a)(O,2),C=x[0],v=x[1],N=Object(s.useState)(!1),g=Object(c.a)(N,2),y=g[0],F=g[1],k=function(t){"name"===t.currentTarget.name&&h(t.currentTarget.value),"number"===t.currentTarget.name&&v(t.currentTarget.value)};return Object(d.jsxs)("div",{className:i.a.formContainer,children:[Object(d.jsxs)(u.a,{className:i.a.form,component:"form",onSubmit:function(t){t.preventDefault();var c,s=Object(n.a)(a);try{for(s.s();!(c=s.n()).done;){if(c.value.name===_)return F(!0),h(""),void v("")}}catch(r){s.e(r)}finally{s.f()}e({name:_,number:C}),h(""),v(""),F(!1)},sx:{"& > :not(style)":{m:1}},autoComplete:"off",children:[Object(d.jsx)(b.a,{className:i.a.input,type:"text",name:"name",placeholder:"Ivan Dulin",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",inputProps:p,value:_,onChange:k,required:!0}),Object(d.jsx)(b.a,{className:i.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"067-233-15-14",required:!0,value:C,onChange:k,inputProps:p}),Object(d.jsx)(m.a,{direction:"row",spacing:2,children:Object(d.jsx)(j.a,{className:i.a.btn,variant:"contained",type:"submit",color:"success",children:"Add contact"})})]}),y&&Object(d.jsx)("p",{className:i.a.error,children:"*Contact already exists"})]})},_=a(135),h=a.n(_),O=a(136),x=a.n(O),C={"aria-label":"description"},v=function(){var t=Object(r.c)((function(t){return t.contacts.filter})),e=Object(r.b)();return Object(d.jsx)("div",{className:x.a.filter,children:Object(d.jsx)(b.a,{className:x.a.input,inputProps:C,type:"text",placeholder:"Find contact",value:t,onChange:function(t){e(l.a.filterContacts(t.target.value))}})})},N=a(137),g=a.n(N),y=function(){var t=Object(r.b)(),e=Object(r.c)(l.c.getContacts),a=Object(r.c)(l.c.getToken);Object(s.useEffect)((function(){return t(l.b.fetchContacts(a))}),[t,a]);var n=Object(r.c)((function(t){var a=t.contacts.filter.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(a)}))}));return Object(d.jsx)("ul",{className:g.a.list,children:n.map((function(e){return Object(d.jsxs)("li",{className:g.a.item,children:[Object(d.jsxs)("span",{className:g.a.span,children:[e.name,": ",e.number]}),Object(d.jsx)("button",{className:g.a.btn,type:"button",id:e.id,onClick:function(){t(l.b.deleteContact(e.id))},children:"Delete"})]},e.id)}))})};e.default=function(){var t=Object(r.b)();return Object(d.jsxs)("main",{className:h.a.main,children:[Object(d.jsx)("div",{className:h.a.form,children:Object(d.jsx)(f,{onSubmit:function(e,a){return t(l.b.addContact(e,a))}})}),Object(d.jsxs)("div",{className:h.a.search,children:[Object(d.jsx)(v,{}),Object(d.jsx)(y,{})]})]})}}}]);
//# sourceMappingURL=4.e4048236.chunk.js.map