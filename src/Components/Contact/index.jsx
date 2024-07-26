//import React from 'react';
import "./Contact.css";

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "3707a440-5c3b-4d85-9522-b6c13b60270e");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
    };

    return (
        <section id='contact' data-aos="fade-zoom-in">
            <div className="wrapper">
                <div className="contact-form" data-aos="fade-left">
                    <div className="top">
                        <h1 className="title">
                            <span className="gradient-text">Lets connect</span>
                        </h1>
                        <p className="muted">
                            I build with precision and passion, creating projects that 
                            stand out. Lets go to the next level!
                        </p>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="middle">
                            <div className="flex row">
                                <input type="text" placeholder='Full name' name='name' className='control'/>
                            </div>
                            <div className="flex row">
                                <input type="email" placeholder='Email address' name='email' className='control'/>
                            </div>
                            <textarea name="message" cols={30} rows={10} placeholder='Message' className='control'></textarea>
                        </div>
                        <div className="flex-center bottom">
                            <button className='btn primary' type="submit">Send Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;
