import React, { Fragment, useState, useEffect } from 'react';
import PageWrapper from "../../components/PageWrapper";
import PageHeader from "../../components/PageHeader";
import BlogContent from "./BlogContent";
import SidebarForBlog from "../SidebarForBlog";
import Blogs from "../../data/Blog/blog";
import Anchor from '../../components/UI/Anchor/index'

const BlogPage = ({ sidebar_position, blog_type, sidebar }) => {

    const [data, setData] = useState([{
        selected: null,
        categories: [],
        blogData: []
    }]);

    useEffect(() => {
        if (!data.categories && !data.blogData) {
            setData({
                selected: null,
                categories : uniqueCategories(),
                blogData: Blogs
            });
        }
    })

    const uniqueCategories = () => {
        let results = [];
        if (Array.isArray(Blogs) && Blogs.length > 0) {
            Blogs.map((item, index) => {
                item.category.map(category => {
                    const tmpCat = {
                        'name': category.name,
                        'path': category.path
                    };
                    if (results.findIndex(e => tmpCat.name == e.name) < 0) {
                        results.push(tmpCat);
                    }
                });
            });
        }

        return results;
    }

    const handleCategoryClick = (event) => {
        const catName = event.target.name;
        setData(preState => ({...preState, selected: catName}));
        if (Array.isArray(Blogs) && Blogs.length > 0) {
            let results = [];
            Blogs.map(item => {
                if (item.category.findIndex(e => e.name == catName) >= 0) {
                    results.push(item);
                }
            });

            if (results.length !== 0) {
                setData(preState => ({...preState, blogData: results}));
            }
        }
    }

    if (!data.categories || !data.blogData) {
        return <span> Loading.... </span>;
    }

    return (

        <Fragment>
            <PageHeader
                bgImg={require('../../assets/img/blog.jpg')}
                // title={'From Our Latest News'}
                // content={'Businex always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly.'}
            />

            <PageWrapper classes={'blog-page-content-area sp-y'}>
                {sidebar === true && sidebar_position === 'left'
                    ?
                    <SidebarForBlog
                        onCatClick={() => handleCategoryClick}
                        classes={'order-1 order-lg-0'}
                        data={data}
                    />
                    :
                    null}

                <BlogContent Blogs={data.blogData} blog_type={blog_type} cols={sidebar ? 'col-lg-9' : 'col-12'} classes={sidebar_position === 'left' ? 'order-0 order-lg-1' : null} />

                {sidebar === true && sidebar_position === 'right' ? <SidebarForBlog /> : null}
            </PageWrapper>
        </Fragment>
    );
};

export default BlogPage;