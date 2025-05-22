import os
from PIL import Image, ImageDraw, ImageFont
import random

# Create directory if it doesn't exist
os.makedirs('images', exist_ok=True)

# Function to generate a random color
def random_color():
    return (random.randint(100, 200), random.randint(100, 200), random.randint(100, 200))

# Function to generate a placeholder image
def generate_image(filename, width, height, text):
    # Create a new image with a random background color
    image = Image.new('RGB', (width, height), random_color())
    draw = ImageDraw.Draw(image)
    
    # Add some random shapes for visual interest
    for _ in range(5):
        shape_color = (
            random.randint(50, 150),
            random.randint(50, 150),
            random.randint(50, 150)
        )
        x1 = random.randint(0, width//2)
        y1 = random.randint(0, height//2)
        x2 = random.randint(width//2, width)
        y2 = random.randint(height//2, height)
        draw.rectangle([x1, y1, x2, y2], fill=shape_color)
    
    # Try to use a font, fall back to default if not available
    try:
        font = ImageFont.truetype("arial.ttf", 30)
    except IOError:
        font = ImageFont.load_default()
    
    # Add text to the center of the image
    # PIL's textsize is deprecated in newer versions, so handle both cases
    try:
        text_width, text_height = draw.textsize(text, font=font)
    except AttributeError:
        # For newer PIL versions
        text_width, text_height = font.getsize(text) if hasattr(font, 'getsize') else (width//4, height//4)
    
    position = ((width - text_width) // 2, (height - text_height) // 2)
    draw.text(position, text, fill=(255, 255, 255), font=font)
    
    # Save the image
    image.save(f'images/{filename}')
    print(f"Generated {filename}")

# Generate profile image
generate_image('profile.jpg', 600, 600, 'Profile')

# Generate hero background
generate_image('hero-bg.jpg', 1920, 1080, 'Hero Background')

# Generate blog header background
generate_image('blog-header-bg.jpg', 1920, 500, 'Blog Header')

# Generate projects header background
generate_image('projects-header-bg.jpg', 1920, 500, 'Projects Header')

# Generate project images
for i in range(1, 7):
    generate_image(f'project{i}.jpg', 800, 600, f'Project {i}')

# Generate project detail images
for i in range(1, 5):
    generate_image(f'project1-detail{i}.jpg', 600, 400, f'Project 1 Detail {i}')

# Generate blog post images
for i in range(1, 5):
    generate_image(f'blog{i}.jpg', 800, 500, f'Blog {i}')

print("All images generated successfully!")