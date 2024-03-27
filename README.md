
# String Manipulation Test

This is a string manipulation test project. 

* Group -> Category -> SubCategory -> Make -> Model -> Diagram

You are working on an online store with over 100k+ products. The store has the following hierarchy in order to keep the products organized.  this hierarchy was built using a tagging system. 
Each product is tagged with one or more of the prefixes above. For example, a produt can have the following tags:

* Group_A
* Category_B
* SubCategory_C

* Project Requirement Documentation: https://drive.google.com/file/d/1VGEoXq-r0s7oxN-RyY8RWZ0LGHij4d2r/view

## Test Cases

* console.log("Group_Electric-Pallet-Jack-Parts, Category_Switches, Subcategory_Ignition-Switch")
* console.log("Case 3", findCombinationsFromText("Group_Electric-Pallet-Jack-Parts, Category_Switches, Subcategory_Ignition-Switch"));
* console.log("--Group_Electric-Pallet-Jack-Parts, Category_Switche@%s-!!Subcategory_Ignition-Switch))@!%")
* console.log("Case 4", findCombinationsFromText("--Group_Electric-Pallet-Jack-Parts, Category_Switche@%s-!!Subcategory_Ignition-Switch))@!%"));
* console.log("Category_Switches-Group_Electric-Pallet-Jack-Parts-Subcategory_Ignition-Switch")
* console.log("Case 5", findCombinationsFromText("Category_Switches-Group_Electric-Pallet-Jack-Parts-Subcategory_Ignition-Switch"));
* console.log("Group_Tools-Hardware-Category_Roll-Pin-Make_Atlas")
* console.log("Case 6", findCombinationsFromText("Group_Tools-Hardware-Category_Roll-Pin-Make_Atlas"));
* console.log("Group_Tools-Hardware-Category_Roll-Pin-Make_Atlas-Group_Test")
* console.log("Case 7", findCombinationsFromText("Group_Tools-Hardware-Category_Roll-Pin-Make_Atlas-Group_Test"));
* console.log("Group_Tools-Hardware-Category_Roll-Pin-Make_Atlas-WrongPrefix_Test")
* console.log("Case 8", findCombinationsFromText("Group_Tools-Hardware-Category_Roll-Pin-Make_Atlas-WrongPrefix_Test"));
* console.log('Group_Tools-Hardware-Category_Roll-Pin-Make_U-Line-Model_H-1193')
* console.log("Case 9", findCombinationsFromText('Group_Tools-Hardware-Category_Roll-Pin-Make_U-Line-Model_H-1193'))
* console.log('Group_Tools-Hardware-Category_Roll-Pin-Make_Multiton-Model_J')
* console.log("Case 10", findCombinationsFromText('Group_Tools-Hardware-Category_Roll-Pin-Make_Multiton-Model_J'))
* console.log('Make_Atlas-Model_Zenith-Type9-Diagram_Frame')
* console.log("Case 11", findCombinationsFromText('Make_Atlas-Model_Zenith-Type9-Diagram_Frame'))
* console.log('Group_Tools-&-Hardware')
* console.log("Case 12", findCombinationsFromText('Group_Tools-&-Hardware'))
* console.log('Group_Electric-Pallet-Jack-Parts-Category_Battery-Subcategory_Battery-Charger-Make_Hyster-Model_B218N26949L-UP')
* console.log("Case 13", findCombinationsFromText('Group_Electric-Pallet-Jack-Parts-Category_Battery-Subcategory_Battery-Charger-Make_Hyster-Model_B218N26949L-UP'))
* console.log('Group_Electric-Pallet-Jack-Parts-Category_Electric-Pallet-Jack-Lift-Parts-Subcategory_Yoke')
* console.log("Case 14", findCombinationsFromText('Group_Electric-Pallet-Jack-Parts-Category_Electric-Pallet-Jack-Lift-Parts-Subcategory_Yoke'))
* console.log('Group_Industrial-Seal-Kits-Make_Yutani')
* console.log("Case 15", findCombinationsFromText('Group_Industrial-Seal-Kits-Make_Yutani'))
* console.log('Make_Atlas-Model_Zenith-Type9')
* console.log("Case 16", findCombinationsFromText('Make_Atlas-Model_Zenith-Type9'))
* console.log('Group_Wheel-Bearings-Category_Bearing-Wiper')
* console.log("Case 17", findCombinationsFromText('Group_Wheel-Bearings-Category_Bearing-Wiper'))

--------

* console.log(findCombinationsFromText('Group_Tools-Hardware-Category_Washer-Make_Lift-Rite'));
* console.log(findCombinationsFromText('--Group_Tools-Hardware-Category_Washer-Make_Lift--Rite--'));
* console.log(findCombinationsFromText('Make_Lift-Rite-Group_Tools-Hardware-Category_Washer-'));
* console.log(findCombinationsFromText('Make_Lift-Rite-Group_Tools-&-Hardware-Category_Washer-'));
* console.log(findCombinationsFromText('Make#$(&^_Lift-Rite-Group_Tool!@%s-Hardware-Category_Washer-!@#%'));


 Those lines should return
 [
   ['Group_Tools-Hardware', 'Category_Washer', 'Make_Lift-Rite'],
   ['Group_Tools-Hardware', 'Category_Washer'],
   ['Group_Tools-Hardware']
 ]

And below lines should return empty array

* console.log(findCombinationsFromText('Group_Tools-Hardware-Category_Washer-Make_Lift-Rite'));
* console.log(findCombinationsFromText('Group_Tools-Hardware-Category_Washer-Make_Lift-Rite-WrongPrefix_Test'));
* console.log(findCombinationsFromText('Group_Tools-Hardware-Group_Invalid-Category_Washer-Make_Lift-Rite'));
* console.log(findCombinationsFromText('Group_Tools-Hardware-Make_Lift-Rite-Group_Invalid-Category_Washer'));
* console.log(findCombinationsFromText('Make_Lift-Rite-Group_Invalid-Category_Washer-Group_Tools-Hardware'));
* console.log(findCombinationsFromText(''));