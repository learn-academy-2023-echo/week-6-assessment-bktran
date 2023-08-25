# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) define a controller class for BlogPost and is a subclass of ApplicationController. It contains logic for http requests
class BlogPostsController < ApplicationController
  def index
    # ---2) BlogPost.all assigns all instances of a post and assign it to an instance variable
    @posts = BlogPost.all
  end

  # ---3) show method finds a specific post by calling .find method and with a parameter passed in based on id
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) instantiating a new blog post and assign it to instance variable post
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) creating a new post with a strong param passed in inorder to control what the user can access. If new post created is valid, the page is redirected to the newly created post
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) load an edit page based on id passed in
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) only allowing update to specific columns based on the strong param. if update is successful, the page is redirected to the newly updated post
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) redirect to the index apge which contains all of the posts in the database
      redirect_to blog_posts_path
    end
  end

  # ---9) private keyword ensures no other method outside of this file has access to methods within the private keyword scope
  private
  def blog_post_params
    # ---10) strong paramater that only allows access to :title and :content giving it an extra security layer from user
    params.require(:blog_post).permit(:title, :content)
  end
end
