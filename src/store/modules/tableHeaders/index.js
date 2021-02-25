import getters from "@/store/modules/tableHeaders/getters";
import actions from "@/store/modules/tableHeaders/actions";
import mutations from "@/store/modules/tableHeaders/mutations";

const state = {
  accession: [],
  agent: [],
  analysis: [],
  analysis_method: [],
  analysis_parameter: [],
  area: [],
  attachment: [],
  collection: [],
  dataset: [],
  deaccession: [],
  doi: [],
  drillcore: [],
  drillcore_box: [],
  imageset: [],
  journal: [],
  keyword: [],
  library: [],
  loan: [],
  locality: [],
  location: [],
  preparation: [],
  project: [],
  reference: [],
  rock: [],
  sample: [],
  sample_series: [],
  sarv_issue: [],
  selection_series: [],
  site: [],
  site_groundwater: [],
  specimen: [],
  stratigraphy: [],
  taxon: [],
  taxon_page: [],
  visit: [],
  web_news: [],
  web_pages: [],
  defaults: {
    accession: [
      "number",
      "date_signed",
      "agent_andis__agent",
      "agent_vottis__agent",
      "number_items",
      "description",
      "id"
    ],
    agent: [
      "id",
      "agent",
      "forename",
      "surename",
      "institution_name",
      "institution",
      "remarks",
      "type"
    ],
    analysis: [
      "id",
      "sample",
      "sample__number",
      "sample__locality__locality",
      "sample__depth",
      "analysis_method__analysis_method",
      "date",
      "lab_txt",
      "agent",
      "link"
    ],
    analysis_method: [
      "id",
      "analysis_method",
      "parent_method__analysis_method"
    ],
    analysis_parameter: [
      "id",
      "parameter",
      "parameter_html",
      "parameter_name",
      "synonyms",
      "parent_parameter"
    ],
    area: [
      "name",
      "area_type",
      "maardla",
      "eelis",
      "area_ha",
      "deposit_area_ha",
      "maakond"
    ],
    attachment: [
      "uuid_filename",
      "id",
      "attachment_format__value",
      "image_number",
      "author__agent",
      "date_created",
      "specimen",
      "reference__reference",
      "specimen_image_attachment",
      "is_private",
      "link"
    ],
    collection: [
      "collection_id",
      "name",
      "name_long",
      "database__acronym",
      "link"
    ],
    dataset: ["id", "name", "date", "owner", "database__acronym", "link"],
    deaccession: [
      "number",
      "date_signed",
      "agent_kandis",
      "number_items",
      "description",
      "id"
    ],
    doi: [
      "id",
      "creators",
      "publication_year",
      "title",
      "resource_type__value",
      "datacite_created",
      "link"
    ],
    drillcore: [
      "id",
      "drillcore",
      "depth",
      "boxes",
      "box_numbers",
      "location",
      "year",
      "agent__agent",
      "remarks",
      "link"
    ],
    drillcore_box: [
      "drillcore",
      "number",
      "number_meters",
      "depth_start",
      "depth_end",
      "depth_other",
      "stratigraphy_base",
      "stratigraphy_top",
      "stratigraphy_free",
      "remarks",
      "link"
    ],
    imageset: ["id", "imageset_number", "author", "description", "date_added"],
    journal: [
      "id",
      "journal_name",
      "journal_short",
      "journal_original",
      "publisher",
      "remarks"
    ],
    keyword: [
      "id",
      "keyword",
      "language__value",
      "keyword_category__name",
      "is_primary",
      "is_preferred"
    ],
    library: ["id", "title", "author_txt", "is_private", "link"],
    loan: [
      "print",
      "id",
      "loan_number",
      "borrower",
      "project",
      "date_start",
      "date_end",
      "returned",
      "database"
    ],
    locality: [
      "id",
      "locality",
      "number",
      "country__value",
      "user_added",
      "link"
    ],
    location: [
      "id",
      "location",
      "parent_location__location",
      "agent",
      "contents"
    ],
    preparation: [
      "id",
      "preparation_number",
      "locality",
      "stratigraphy",
      "agent",
      "link"
    ],
    project: [
      "id",
      "name",
      "project_type__name",
      "date_start",
      "date_end",
      "date_free",
      "owner__agent"
    ],
    reference: [
      "id",
      "author",
      "year",
      "title",
      "author",
      "journal__journal_name",
      "volume",
      "pages",
      "is_estonian_reference",
      "link",
      "doi",
      "attachment",
      "url"
    ],
    rock: [
      "id",
      "name",
      "name_en",
      "formula_html",
      "rock_type",
      "rock_rank",
      "in_estonia",
      "in_portal",
      "link",
      "mindat_id"
    ],
    sample: [
      "number",
      "id",
      "locality",
      "depth",
      "stratigraphy",
      "agent_collected__agent",
      "storage__location",
      "link"
    ],
    sample_series: ["id", "name", "locality", "agent_collected"],
    sarv_issue: [
      "replied",
      "id",
      "date_added",
      "from_user__username",
      "to_user__username",
      "title",
      "description",
      "url",
      "response"
    ],
    selection_series: ["id", "name", "remarks", "user_added"],
    site: ["id", "name", "number", "project", "date_start", "date_end"],
    site_groundwater: [
      "id",
      "type_txt",
      "aquifer_system",
      "aquifer",
      "well_depth",
      "filter_type",
      "filter_top",
      "filter_bottom",
      "filter_top_z",
      "filter_bottom_z",
      "url_veka",
      "remarks"
    ],
    specimen: [
      "id",
      "specimen_id",
      "name",
      "locality__locality",
      "depth",
      "stratigraphy__stratigraphy",
      "agent_collected__agent",
      "storage__location",
      "link"
    ],
    stratigraphy: ["id", "stratigraphy", "type", "rank", "scope", "link"],
    taxon: [
      "id",
      "taxon",
      "author_year",
      "taxon_epithet",
      "parent__taxon",
      "fossil_group__taxon",
      "link"
    ],
    taxon_pages: ["id", "taxon", "language", "title"],
    visit: [
      "id",
      "visitor",
      "visitor_country",
      "date_arrived",
      "date_left",
      "host"
    ],
    web_news: ["id", "title", "text", "is_private"],
    web_pages: ["id", "site", "title", "content", "public"]
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};