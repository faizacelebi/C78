var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "cartoon-dad-005.jpg" , "c3488b3af85fb51d9224f1fa94ef9bac.jpg" , "download.jfif" , "download.jfif" , "sister-portrait-pretty-teenage-girl-schoolgirl-long-brown-hair-satchel-bag-school-uniform-skirt-blouse-daughter-86364433.jpg"];
var names = ["Fmaily Book","Azim Celebi", "Nur Celebi", "Aleyna Celebi", "Nisa Celebi", "Zara Celebi"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
