import React from 'react';

const Blog = ({ blog }) => {
    return (
        <div className="first-blog col-lg-6 col-md-6 col-sm-12">
            <div className="blog-image">
                <img type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" src={blog.img} alt="" />
            </div>
            <div className="blog-text">
                <h1>
                    {blog.questios}
                </h1>
            </div>
        </div>
    );
};

export default Blog;