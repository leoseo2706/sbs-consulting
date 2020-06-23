import React from 'react';
import SectionTitle from "../UI/SectionTitle";
import BlogItem from "./blogItem";

import Blogs from '../../data/Blog/blog';

function Blog() {
    return (
        <div className="blog-area-wrapper sm-top">
            <div className="container ">
                <div className="row bg-offwhite" style={{height: "135px", paddingTop: "10px"}}>
                    <div className="col-12 text-center">
                        <SectionTitle title="OUR BLOGS" heading="Latest update <br> from our blog post"/>
                    </div>
                </div>

                <div className="row mtn-35" style={{marginTop: "10px"}}>
                    {
                        Blogs.reverse().slice(0,3).map(blog =>(
                            <BlogItem key={blog.id} id={blog.id} title={blog.title} excerpt={blog.excerpt} postBy={blog.author.name} date={blog.publishDate}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Blog;