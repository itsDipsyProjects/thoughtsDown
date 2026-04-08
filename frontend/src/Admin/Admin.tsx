import "./Admin.css";

export function Admin(){
    return(
        <>
            <div className="admin_container">
                <div>
                    <h1>Create a blog post</h1>
                </div>
                <div className="input_container">
                    <input placeholder="Enter post title" type="text" />
                    <input placeholder="Brief description" type="text" />
                    <input placeholder="Author" type="text" />
                    <input placeholder="https://example.com/image.jpg" type="text" />
                    <input placeholder="5 Min" type="text" />
                    <textarea name="blog_content" id="blogContent"></textarea>
                </div>
                <button>Create</button>
            </div>
        </>
    )
}