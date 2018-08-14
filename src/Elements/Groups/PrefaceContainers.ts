import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The group prefaceContainers lists the elements that are containers
 * and are specific to the Akoma Ntoso preface vocabulary.
 */
export class PrefaceContainers implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    preCont: {
      minOccur: 1,
      maxOccur: 1,
      options: {
        longTitle: { maxOccur: 1, options: {} },
        formula: { maxOccur: 1, options: {} },
        container: { maxOccur: 1, options: {} },
      }
    }
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}