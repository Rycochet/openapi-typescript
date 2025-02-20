/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/regions/": {
    get: {
      parameters: {
        query: {
          /** Filter results to only include the regions that have this location. */
          location?: string;
          /**
           * Filter results to only include the regions that are on this
           * platform.
           */
          platform?: string;
        };
      };
      responses: {
        /** A list of regions. */
        200: {
          content: {
            "application/json": components["schemas"]["Region"][];
          };
        };
        /** Unexpected Error */
        500: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
      };
    };
    post: {
      responses: {
        /** Complete region object */
        201: {
          content: {
            "application/json": components["schemas"]["Region"];
          };
        };
        /** Invalid request provided */
        400: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Region already exists for that platform and location */
        409: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Unexpected Error */
        500: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
      };
      /** Region create request */
      requestBody: {
        content: {
          "application/json": components["schemas"]["CreateRegion"];
        };
      };
    };
  };
  "/regions/{id}": {
    get: {
      parameters: {
        path: {
          /** ID of the region to lookup, stored as a base32 encoded 18 byte identifier. */
          id: string;
        };
      };
      responses: {
        /** A region. */
        200: {
          content: {
            "application/json": components["schemas"]["Region"];
          };
        };
        /** Provided Region ID is Invalid */
        400: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Region could not be found */
        404: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Unexpected Error */
        500: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
      };
    };
    patch: {
      parameters: {
        path: {
          /** ID of the region to lookup, stored as a base32 encoded 18 byte identifier. */
          id: string;
        };
      };
      responses: {
        /** Complete region object */
        200: {
          content: {
            "application/json": components["schemas"]["Region"];
          };
        };
        /** Invalid request provided */
        400: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Unexpected Error */
        500: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
      };
      /** Region update request */
      requestBody: {
        content: {
          "application/json": components["schemas"]["UpdateRegion"];
        };
      };
    };
  };
  "/providers/": {
    get: {
      parameters: {
        query: {
          /** Filter results to only include those that have this label. */
          label?: string;
        };
      };
      responses: {
        /** A list of providers. */
        200: {
          content: {
            "application/json": components["schemas"]["Provider"][];
          };
        };
        /** Unexpected Error */
        500: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
      };
    };
    post: {
      responses: {
        /** Complete provider object */
        201: {
          content: {
            "application/json": components["schemas"]["Provider"];
          };
        };
        /** Invalid request provided */
        400: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Forbidden */
        403: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Provider already exists with that label */
        409: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Unexpected Error */
        500: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
      };
      /** Provider create request */
      requestBody: {
        content: {
          "application/json": components["schemas"]["CreateProvider"];
        };
      };
    };
  };
  "/providers/{id}": {
    get: {
      parameters: {
        path: {
          /** ID of the provider to lookup, stored as a base32 encoded 18 byte identifier. */
          id: string;
        };
      };
      responses: {
        /** A provider. */
        200: {
          content: {
            "application/json": components["schemas"]["Provider"];
          };
        };
        /** Unknown provider error */
        404: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Unexpected Error */
        500: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
      };
    };
    patch: {
      parameters: {
        path: {
          /** ID of the provider to update, stored as a base32 encoded 18 byte identifier. */
          id: string;
        };
      };
      responses: {
        /** Complete provider object */
        200: {
          content: {
            "application/json": components["schemas"]["Provider"];
          };
        };
        /** Invalid request provided */
        400: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Forbidden */
        403: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Provider not found */
        404: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Provider already exists with that label */
        409: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Unexpected Error */
        500: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
      };
      /** Provider update request */
      requestBody: {
        content: {
          "application/json": components["schemas"]["UpdateProvider"];
        };
      };
    };
  };
  "/products/": {
    get: {
      parameters: {
        query: {
          /**
           * Base32 encoded 18 byte identifier of the provider that these
           * products must belong to.
           */
          provider_id?: string;
          /** Filter results to only include those that have this label. */
          label?: string;
          /** Return only products matching at least one of the tags. */
          tags?: string[];
        };
      };
      responses: {
        /** A product. */
        200: {
          content: {
            "application/json": components["schemas"]["Product"][];
          };
        };
        /** Invalid provider_id supplied */
        400: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Unexpected Error */
        500: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
      };
    };
    post: {
      responses: {
        /** Complete product object */
        201: {
          content: {
            "application/json": components["schemas"]["Product"];
          };
        };
        /** Invalid request provided */
        400: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Forbidden */
        403: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Product already exists with that label */
        409: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Unexpected Error */
        500: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
      };
      /** Product create request */
      requestBody: {
        content: {
          "application/json": components["schemas"]["CreateProduct"];
        };
      };
    };
  };
  "/internal/products": {
    get: {
      parameters: {
        query: {
          /**
           * Base32 encoded 18 byte identifier of the provider that these
           * products must belong to.
           */
          provider_id?: string;
          /** Filter results to only include those that have this label. */
          label?: string;
          /** Return only products matching at least one of the tags. */
          tags?: string[];
          /** Return product listings without plan information */
          include_plans?: boolean;
        };
      };
      responses: {
        /** A product. */
        200: {
          content: {
            "application/json": components["schemas"]["ExpandedProduct"][];
          };
        };
        /** Invalid provider_id supplied */
        400: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Unexpected Error */
        500: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
      };
    };
  };
  "/products/{id}": {
    get: {
      parameters: {
        path: {
          /**
           * ID of the product to lookup, stored as a base32 encoded 18 byte
           * identifier.
           */
          id: string;
        };
      };
      responses: {
        /** A product. */
        200: {
          content: {
            "application/json": components["schemas"]["Product"];
          };
        };
        /** Invalid Product ID */
        400: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Product not found error */
        404: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Unexpected error */
        500: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
      };
    };
    patch: {
      parameters: {
        path: {
          /**
           * ID of the product to lookup, stored as a base32 encoded 18 byte
           * identifier.
           */
          id: string;
        };
      };
      responses: {
        /** Complete product object */
        200: {
          content: {
            "application/json": components["schemas"]["Product"];
          };
        };
        /** Invalid Product ID */
        400: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Product not found error */
        404: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Unexpected error */
        500: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
      };
      /** Product update request */
      requestBody: {
        content: {
          "application/json": components["schemas"]["UpdateProduct"];
        };
      };
    };
  };
  "/plans/{id}": {
    get: {
      parameters: {
        path: {
          /**
           * ID of the plan to lookup, stored as a base32 encoded 18 byte
           * identifier.
           */
          id: string;
        };
      };
      responses: {
        /** A plan. */
        200: {
          content: {
            "application/json": components["schemas"]["ExpandedPlan"];
          };
        };
        /** Invalid Plan ID Provided */
        400: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Unknown plan error */
        404: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Unexpected error */
        default: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
      };
    };
    patch: {
      parameters: {
        path: {
          /**
           * ID of the plan to lookup, stored as a base32 encoded 18 byte
           * identifier.
           */
          id: string;
        };
      };
      responses: {
        /** Complete product plan */
        200: {
          content: {
            "application/json": components["schemas"]["Plan"];
          };
        };
        /** Invalid Plan ID */
        400: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Plan not found error */
        404: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Unexpected error */
        500: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
      };
      /** Plan update request */
      requestBody: {
        content: {
          "application/json": components["schemas"]["UpdatePlan"];
        };
      };
    };
  };
  "/plans/": {
    get: {
      parameters: {
        query: {
          /** Return the plans that are associated with this product. */
          product_id: string[];
          /** Filter results to only include those that have this label. */
          label?: string;
        };
      };
      responses: {
        /** A list of plans for the given product. */
        200: {
          content: {
            "application/json": components["schemas"]["ExpandedPlan"][];
          };
        };
        /** Invalid Parameters Provided */
        400: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Could not find product */
        404: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Unexpected error */
        500: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
      };
    };
    post: {
      responses: {
        /** Complete plan object */
        201: {
          content: {
            "application/json": components["schemas"]["Plan"];
          };
        };
        /** Invalid request provided */
        400: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Forbidden */
        403: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Plan already exists with that label */
        409: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
        /** Unexpected Error */
        500: {
          content: {
            "application/json": components["schemas"]["Error"];
          };
        };
      };
      /** Plan create request */
      requestBody: {
        content: {
          "application/json": components["schemas"]["CreatePlan"];
        };
      };
    };
  };
}

export interface components {
  schemas: {
    /** A base32 encoded 18 byte identifier. */
    ID: string;
    /** A base32 encoded 18 byte identifier. */
    OptionalID: string | null;
    /** A flexible identifier for internal or external entities. */
    FlexID: string;
    /** A flexible identifier for internal or external entities. */
    OptionalFlexID: string | null;
    /** A machine readable unique label, which is url safe. */
    Label: string;
    /** A machine readable unique label, which is url safe. */
    OptionalLabel: string | null;
    /** A machine readable unique label, which is url safe. */
    FeatureValueLabel: string;
    /** A location of where a potential resource can be provisioned. */
    Location: string;
    /** A name of a platform which is used to provision resources. */
    Platform: string;
    /** A name of an entity which is displayed to a human. */
    Name: string;
    /** A name of an entity which is displayed to a human. */
    OptionalName: string | null;
    /**
     * Logo used for Provider and Product listings.
     *
     * Must be square (same width and height) and minimum 400px. Maximum of 800px.
     */
    LogoURL: string;
    /**
     * Logo used for Provider and Product listings.
     *
     * Must be square (same width and height) and minimum 400px. Maximum of 800px.
     */
    OptionalLogoURL: string | null;
    RegionBody: {
      platform: components["schemas"]["Platform"];
      location: components["schemas"]["Location"];
      name: string;
      priority: number;
    };
    Region: {
      id: components["schemas"]["ID"];
      type: "region";
      version: number;
      body: components["schemas"]["RegionBody"];
    };
    CreateRegion: {
      body: components["schemas"]["RegionBody"];
    };
    UpdateRegion: {
      name: string;
    };
    ProviderBody: {
      owner_id?: components["schemas"]["OptionalFlexID"];
      team_id?: components["schemas"]["OptionalID"];
      label: components["schemas"]["Label"];
      name: components["schemas"]["Name"];
      logo_url?: components["schemas"]["LogoURL"];
      support_email?: string;
      documentation_url?: string;
    };
    UpdateProviderBody: {
      owner_id?: components["schemas"]["OptionalFlexID"];
      team_id?: components["schemas"]["OptionalID"];
      label?: components["schemas"]["OptionalLabel"];
      name?: components["schemas"]["OptionalName"];
      logo_url?: components["schemas"]["OptionalLogoURL"];
      support_email?: string | null;
      documentation_url?: string | null;
    };
    Provider: {
      id: components["schemas"]["ID"];
      version: number;
      type: "provider";
      body: components["schemas"]["ProviderBody"];
    };
    CreateProvider: {
      body: components["schemas"]["ProviderBody"];
    };
    UpdateProvider: {
      id: components["schemas"]["ID"];
      body: components["schemas"]["UpdateProviderBody"];
    };
    UpdateProduct: {
      id: components["schemas"]["ID"];
      body: components["schemas"]["UpdateProductBody"];
    };
    UpdateProductBody: {
      name?: components["schemas"]["Name"];
      label?: components["schemas"]["Label"];
      logo_url?: components["schemas"]["LogoURL"];
      listing?: components["schemas"]["ProductListing"];
      /** 140 character sentence positioning the product. */
      tagline?: string | null;
      /** A list of value propositions of the product. */
      value_props?: components["schemas"]["ValueProp"][] | null;
      /** A list of getting started steps for the product */
      setup_steps?: string[] | null;
      images?: components["schemas"]["ProductImageURL"][] | null;
      support_email?: string | null;
      documentation_url?: string | null;
      /**
       * URL to this Product's Terms of Service. If provided is true, then
       * a url must be set. Otherwise, provided is false.
       */
      terms_url?: string | null;
      feature_types?: components["schemas"]["FeatureType"][] | null;
      integration?: {
        provisioning?: components["schemas"]["ProductProvisioning"];
        base_url?: string | null;
        sso_url?: string | null;
        version?: "v1" | null;
        features?: {
          access_code?: boolean | null;
          sso?: boolean | null;
          plan_change?: boolean | null;
          credential: ("none" | "single" | "multiple" | "unknown") | null;
        };
      } | null;
      /** An array of platform ids to restrict this product for. */
      platform_ids?: components["schemas"]["ID"][] | null;
      tags?: components["schemas"]["ProductTags"];
    };
    UpdatePlan: {
      id: components["schemas"]["ID"];
      body: components["schemas"]["UpdatePlanBody"];
    };
    UpdatePlanBody: {
      name?: components["schemas"]["Name"];
      label?: components["schemas"]["Label"];
      state?: components["schemas"]["PlanState"];
      /** Used in conjuction with resizable_to to set or unset the list */
      has_resize_constraints?: boolean | null;
      resizable_to?: components["schemas"]["PlanResizeList"];
      /** Array of Region IDs */
      regions?: components["schemas"]["ID"][] | null;
      /** Array of Feature Values */
      features?: components["schemas"]["FeatureValue"][] | null;
      /**
       * The number of days a user gets as a free trial when subscribing to
       * this plan. Trials are valid only once per product; changing plans
       * or adding an additional subscription will not start a new trial.
       */
      trial_days?: number | null;
      /** Dollar value in cents */
      cost?: number | null;
    };
    /**
     * A feature type represents the different aspects of a product that are
     * offered, these features can manifest differently depending on the plan.
     */
    FeatureType: {
      label: components["schemas"]["Label"];
      name: components["schemas"]["Name"];
      type: "boolean" | "string" | "number";
      /** This sets whether or not the feature can be customized by a consumer. */
      customizable: boolean;
      /**
       * This sets whether or not the feature can be upgraded by the consumer after the
       * resource has provisioned. Upgrading means setting a higher value or selecting a
       * higher element in the list.
       */
      upgradable: boolean;
      /**
       * This sets whether or not the feature can be downgraded by the consumer after the
       * resource has provisioned. Downgrading means setting a lower value or selecting a
       * lower element in the list.
       */
      downgradable: boolean;
      /**
       * Sets if this feature’s value is trackable from the provider,
       * this only really affects numeric constraints.
       */
      measurable: boolean;
      values?: components["schemas"]["FeatureValuesList"];
    };
    /**
     * A list of allowable values for the feature.
     * To define values for a boolean feature type, only `true` is required,
     * using the label `true`, name and numeric_details will be ignored.
     * If the feature is set measurable it is expected that these all have a
     * `numeric_details` definition, and the plan will determine which
     * `numeric_details` set is used based on it's setting.
     */
    FeatureValuesList: components["schemas"]["FeatureValueDetails"][] | null;
    FeatureValueDetails: {
      label: components["schemas"]["FeatureValueLabel"];
      name: components["schemas"]["Name"];
      /**
       * The cost that will be added to the monthly plan cost when this value
       * is selected or is default for the plan.
       * Cost is deprecated in favor of the `price.cost` field.
       */
      cost?: number;
      /**
       * Price describes the cost of a feature. It should be preferred over
       * the `cost` property.
       */
      price?: {
        /**
         * Cost is the price in cents that will be added to plan's base cost
         * when this value is selected or is default for the plan.
         * Number features should use the cost range instead.
         */
        cost?: number;
        /**
         * When a feature is used to multiply the cost of the plan or of
         * another feature, multiply factor is used for calculation.
         * A feature cannot have both a cost and a multiply factor.
         */
        multiply_factor?: number;
        formula?: components["schemas"]["PriceFormula"];
        /** Description explains how a feature is calculated to the user. */
        description?: string;
      };
      numeric_details?: components["schemas"]["FeatureNumericDetails"];
    };
    /**
     * Optional container for additional details relating to numeric features.
     * This is required if the feature is measurable and numeric.
     */
    FeatureNumericDetails: {
      /**
       * Sets the increment at which numbers can be selected if customizable, by
       * default this is 1; for example, setting this to 8 would only allow integers
       * in increments of 8 ( 0, 8, 16, ... ). This property is not used if the
       * feature is measurable; except if it is set to 0, setting the increment to 0
       * means this numeric details has no scale, and will not be or customizable.
       * Some plans may not have a measureable or customizable feature.
       */
      increment?: number;
      /** Minimum value that can be set by a user if customizable */
      min?: number;
      /** Maximum value that can be set by a user if customizable */
      max?: number | null;
      /** Applied to the end of the number for display, for example the ‘GB’ in ‘20 GB’. */
      suffix?: string | null;
      cost_ranges?: components["schemas"]["FeatureNumericRange"][] | null;
    } | null;
    FeatureNumericRange: {
      /**
       * Defines the end of the range ( inclusive ), from the previous, or 0;
       * where the cost_multiple starts taking effect. If set to -1 this defines the
       * range to infinity, or the maximum integer the system can handle
       * ( whichever comes first ).
       */
      limit?: number;
      /**
       * An integer in 10,000,000ths of cents, will be multiplied by the
       * numeric value set in the feature to determine the cost.
       */
      cost_multiple?: number;
    };
    FeatureValue: {
      feature: components["schemas"]["Label"];
      value: components["schemas"]["FeatureValueLabel"];
    };
    ValueProp: {
      /** Heading of a value proposition. */
      header: string;
      /** Body of a value proposition. */
      body: string;
    };
    /**
     * Image URL used for Product listings.
     *
     * Minimum 660px wide, 400px high.
     */
    ProductImageURL: string;
    /** List of tags for product categorization and search */
    ProductTags: components["schemas"]["Label"][];
    ProductState: "available" | "hidden" | "grandfathered" | "new" | "upcoming";
    ProductListing: {
      /**
       * When true, everyone can see the product when requested. When false it will
       * not be visible to anyone except those on the provider team.
       */
      public: boolean;
      /**
       * When true, the product will be displayed in product listings alongside
       * other products. When false the product will be excluded from listings,
       * but can still be provisioned directly if it's label is known.
       * Any pages that display information about the product when not listed,
       * should indicate to webcrawlers that the content should not be indexed.
       */
      listed: boolean;
      /**
       * Object to hold various flags for marketing purposes only. These are values
       * that need to be stored, but should not affect decision making in code. If
       * we find ourselves in a position where we think they should, we should
       * consider refactoring our listing definition.
       */
      marketing?: {
        /**
         * Indicates whether or not the product is in `Beta` and should be
         * advertised as such. This does not have any impact on who can access the
         * product, it is just used to inform consumers through our clients.
         */
        beta: boolean;
        /**
         * Indicates whether or not the product is in `New` and should be
         * advertised as such. This does not have any impact on who can access the
         * product, it is just used to inform consumers through our clients.
         */
        new: boolean;
        /**
         * Indicates whether or not the product is in `New` and should be
         * advertised as such. This does not have any impact on who can access the
         * product, it is just used to inform consumers through our clients.
         */
        featured: boolean;
      };
    };
    /**
     * Provider Only, implies that the product should only be provisionable by the
     *   provider; so members of the provider team, no one else should be allowed.
     * Pre-Order, should not be used yet. But in the future it should allow people to
     *   pre-provision a resource for when it does go live.
     * Public, means the resource is live and everyone should be able to provision it.
     */
    ProductProvisioning: "provider-only" | "pre-order" | "public";
    ProductIntegrationFeatures: {
      /**
       * Indicates whether or not this product supports resource transitions to
       * manifold by access_code.
       */
      access_code?: boolean;
      /**
       * Represents whether or not this product supports Single
       * Sign On
       */
      sso?: boolean;
      /**
       * Represents whether or not this product supports changing
       * the plan of a resource.
       */
      plan_change?: boolean;
      /**
       * Describes how the region for a resource is specified, if
       * unspecified, then regions have no impact on this
       * resource.
       */
      region?: "user-specified" | "unspecified";
      /**
       * Describes the credential type that is supported by this product.
       *
       * * `none`: The product does not support providing any credentials
       * * `single`: Only one credential is supported at the same time.
       * * `multiple`: Multiple credentials are supported at the same time.
       * * `unknown`: The credential type is unknown.
       */
      credential: "none" | "single" | "multiple" | "unknown";
    };
    ProductBody: {
      provider_id: components["schemas"]["ID"];
      label: components["schemas"]["Label"];
      name: components["schemas"]["Name"];
      state: components["schemas"]["ProductState"];
      listing: components["schemas"]["ProductListing"];
      logo_url: components["schemas"]["LogoURL"];
      /** 140 character sentence positioning the product. */
      tagline: string;
      /** A list of value propositions of the product. */
      value_props: components["schemas"]["ValueProp"][];
      /** A list of getting started steps for the product */
      setup_steps?: string[] | null;
      images: components["schemas"]["ProductImageURL"][];
      support_email: string;
      documentation_url: string;
      /**
       * URL to this Product's Terms of Service. If provided is true, then
       * a url must be set. Otherwise, provided is false.
       */
      terms: {
        url?: string | null;
        provided: boolean;
      };
      feature_types: components["schemas"]["FeatureType"][];
      billing: {
        type: "monthly-prorated" | "monthly-anniversary" | "annual-anniversary";
        currency: "usd";
      };
      integration: {
        provisioning: components["schemas"]["ProductProvisioning"];
        base_url: string;
        sso_url?: string | null;
        version: "v1";
        features: components["schemas"]["ProductIntegrationFeatures"];
      };
      tags?: components["schemas"]["ProductTags"];
    };
    Product: {
      id: components["schemas"]["ID"];
      version: number;
      type: "product";
      body: components["schemas"]["ProductBody"];
    };
    CreateProduct: {
      body: components["schemas"]["ProductBody"];
    };
    /** Array of Plan IDs that this Plan can be resized to, if null all will be assumed */
    PlanResizeList: components["schemas"]["ID"][] | null;
    PlanBody: {
      provider_id: components["schemas"]["ID"];
      product_id: components["schemas"]["ID"];
      name: components["schemas"]["Name"];
      label: components["schemas"]["Label"];
      state: components["schemas"]["PlanState"];
      resizable_to?: components["schemas"]["PlanResizeList"];
      /** Array of Region IDs */
      regions: components["schemas"]["ID"][];
      /** Array of Feature Values */
      features: components["schemas"]["FeatureValue"][];
      /**
       * The number of days a user gets as a free trial when subscribing to
       * this plan. Trials are valid only once per product; changing plans
       * or adding an additional subscription will not start a new trial.
       */
      trial_days?: number;
      /** Dollar value in cents. */
      cost: number;
    };
    PlanState: "hidden" | "available" | "grandfathered" | "unlisted";
    ExpandedPlanBody: components["schemas"]["PlanBody"] & {
      /** An array of feature definitions for the plan, as defined on the Product. */
      expanded_features: components["schemas"]["ExpandedFeature"][];
      /** A boolean flag that indicates if a plan is free or not based on it's cost and features. */
      free: boolean;
      /** Plan cost using its default features plus base cost. */
      defaultCost?: number;
      /** A boolean flag that indicates if a plan has customizable features. */
      customizable?: boolean;
    };
    ExpandedFeature: components["schemas"]["FeatureType"] & {
      /** The string value set for the feature on the plan, this should only be used if the value property is null. */
      value_string: string;
      value: components["schemas"]["FeatureValueDetails"];
    };
    Plan: {
      id: components["schemas"]["ID"];
      version: number;
      type: "plan";
      body: components["schemas"]["PlanBody"];
    };
    ExpandedPlan: {
      id: components["schemas"]["ID"];
      version: number;
      type: "plan";
      body: components["schemas"]["ExpandedPlanBody"];
    };
    CreatePlan: {
      body: components["schemas"]["PlanBody"];
    };
    /** Unexpected error */
    Error: {
      /** The error type */
      type: string;
      /** Explanation of the errors */
      message: string[];
    };
    /**
     * Describes how a feature cost should be calculated. An empty
     * string defaults to the normal price calculation using the value cost.
     * Formula uses Reverse Polish notation for statements. It supports
     * addition, subtraction and multiplication operations. Operations must be
     * grouped with parenthesis.
     * Number literals can be used for formulas. Eg: "(- feature-a#cost 500)"
     * will remove 5 dollars from the cost of feature a.
     * Multiplication operation supports either a cost multiplied by a
     * factor or a number multiplied by a factor.
     * In a plan formula the following keywords are available:
     *   - `plan#base_cost` is the base cost of a plan in cents
     *   - `plan#partial_cost` is the base cost plus its feature costs calculated
     *     so far. Feature formulas are calculated in the order they are defined,
     *     so features can refer to another feature values or the partial_cost of
     *     the plan.
     *   - `this-feature-label#multiply_factor` is the multiply_factor of this
     *     feature as a float number.
     *   - `another-feature-label#cost` is the cost of a feature matching the label
     *     in cents.
     *   - `another-feature-label#number` is the numeric value of a number feature
     * In a feature formula, plan base cost and total cost cannot be used
     */
    PriceFormula: string;
    ExpandedProduct: {
      id: components["schemas"]["ID"];
      version: number;
      type: "product";
      body: components["schemas"]["ProductBody"];
      plans?: components["schemas"]["ExpandedPlan"][];
      provider: components["schemas"]["Provider"];
    };
  };
  parameters: {
    /** Filter results to only include those that have this label. */
    LabelFilter: string;
  };
}

export interface operations {}
