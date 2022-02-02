class SmartPainter extends shapez.ModMetaBuilding {

    constructor(){
        super("smartPainter");
    }

    static getAllVariantCombinations() {
        return [
            {
                variant: shapez.defaultBuildingVariant,
                name: "SMART Painter",
                description: "A special painter variant that takes a shape and color input and up to 4 wires inpus and paints each quad based on the input.",

                regularImageBase64: RESOURCES["painterDoubleMirrored.png"],
                blueprintImageBase64: RESOURCES["painterDoubleMirroredBlueprint.png"],
                tutorialImageBase64: RESOURCES["painterDoubleMirroredBlueprint.png"],
            },
        ];
    }




    setupEntityComponents(entity){
        entity.addComponent(new shapez.ItemProcessorComponent({}));

        entity.addComponent(
            new ItemEjectorComponent({
                slots: [{ pos: new Vector(1, 0), direction: enumDirection.right }],
            })
        );
        





    }




}