function ContactMeComponent(){
    return(
       
        <body className="bg-gray-900">
    <div className="flex w-full justify-around items-center bg-gray-100  text-gray-900">   
    </div>
    <form action="" className="my-20 p-10 max-w-xl mx-auto shadow-md sm:border-0 md:border md:border-gray-900 bg-gray-100 text-gray-900">
        <div className="mb-10">
            <h1 className="font-bold text-4xl mb-3">Get in touch</h1>
            <p className="font-medium text-lg mb-5">Send me a quick message and I'll get back to you shortly.</p>
            <hr className="border-gray-900" />
        </div>
        <div className="mb-5">
            <label for="message" className="text-lg flex justify-between items-end"><span>Message</span><span className="text-xs text-red-500">Required</span></label>
            <textarea name="message" id="message" cols="30" rows="10" className="shadow-md mt-1 block w-full sm:text-sm rounded-none border-gray-900 bg-white"></textarea>
        </div>
        <div className="mb-5">
            <label for="name" className="text-lg flex justify-between items-end"><span>Name</span><span className="text-xs text-red-500 ">Required</span></label>
            <div className="mt-1 flex shadow-md">
                <span className="inline-flex items-center px-3 rounded-none border border-r-0 border-gray-900"><i className="fas fa-user"></i></span>
                <input type="text" name="name" className="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 bg-white " />
            </div>
        </div>
        <div className="mb-5">
            <label for="email" className="text-lg flex justify-between items-end"><span>Email</span><span className="text-xs text-red-500">Required</span></label>
            <div className="mt-1 flex shadow-md">
                <span className="inline-flex items-center px-3 rounded-none border border-r-0 border-gray-900"><i className="fas fa-envelope"></i></span>
                <input type="email" name="email" className="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900" />
            </div>
        </div>
        <div>
            <button type="button" className="font-medium shadow-md rounded-none p-2 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-900 bg-gray-800  text-gray-200 hover:bg-gray-900"><i className="fas fa-check"></i> Send</button>
        </div>
    </form>
</body>

    )
}

export default ContactMeComponent;