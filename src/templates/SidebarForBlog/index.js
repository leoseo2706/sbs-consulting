import React from 'react';
import Sidebar from "../../components/Sidebar";
import SidebarItem from "../../components/Sidebar/SidebarItem";
import List from "../../components/UI/List";
import LI from "../../components/UI/List/Item";
import Anchor from "../../components/UI/Anchor";
import FeaturedBlog from "../../components/FeaturedBlog";
import Newsletter from "../../components/Newsletter";
import BannerImg from "../../assets/img/banner-poster.jpg";

const SidebarForBlog = ({ classes, data, onCatClick }) => {

    const Blogs = data.blogData;

    return (
        <Sidebar classes={`col-lg-3 ${classes}`}>
            <SidebarItem title={'CATEGORIES'} classes={'single-sidebar-item-wrap'}>
                <List classes={'sidebar-list'}>
                    {
                        
                        data.categories.map((category, index) => {

                            return (
                                <LI key={index}>
                                    <Anchor
                                        flag={data.selected == category.name}
                                        onCatClick={onCatClick} >
                                        {category.name}
                                    </Anchor>
                                </LI>
                            )
                        })
                    }
                </List>
            </SidebarItem>

            <SidebarItem title={'FEATURED POSTS'} classes={'single-sidebar-item-wrap'}>
                <div className={'latest-blog-widget'}>
                    {
                        Blogs.reverse().slice(0, 4).map(post => (
                            <FeaturedBlog key={post.id} id={post.id} title={post.title} publishDate={post.publishDate} thumb={post.thumb} />
                        ))
                    }
                </div>
            </SidebarItem>

            <SidebarItem classes={'single-sidebar-item-wrap'}>
                <Newsletter />
            </SidebarItem>

            <SidebarItem classes={'single-sidebar-item-wrap'}>
                <img src={BannerImg} alt="Banner" />
            </SidebarItem>
        </Sidebar>
    );
};

export default SidebarForBlog;