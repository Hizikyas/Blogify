class ApiFeatures {
  constructor(query, queryString) {
      this.query = query;
      this.queryString = queryString;
  }

  filter() {  // { page: 1, sort: "price", limit: 10, fields: "name", categories: "movie" }
      // 1A) Basic filtering
      const queryObj = {...this.queryString};
      const excludedFields = ['page', 'sort', 'limit', 'fields'];
      excludedFields.forEach(el => delete queryObj[el]);

      // 1B) Advanced filtering
      let queryStr = JSON.stringify(queryObj);
      queryStr = queryStr.replace(/\b(gte|gt|lte|lt|ne)\b/g, match => `$${match}`);

      this.query = this.query.find(JSON.parse(queryStr));
      return this;
  }

  sort() {
      if (this.queryString.sort) {
          const sortBy = this.queryString.sort.split(',').join(' ');
          this.query = this.query.sort(sortBy);
      } else {
          this.query = this.query.sort('-publishedAt');
      }
      return this;
  }

  limitFields() { 
      if (this.queryString.fields) {
          const fields = this.queryString.fields.split(',').join(' ');
          this.query = this.query.select(fields);
      } else {
          this.query = this.query.select('-__v');
      }
      return this;
  }

  pagination() {
      const page = this.queryString.page * 1 || 1;
      const limit = this.queryString.limit * 1 || 5;
      const skip = (page - 1) * limit; // Fixed the calculation

      this.query = this.query.skip(skip).limit(limit); // limit() to restrict how many results are returned. it can be 7 like this limit(7) , the skip() method is used to skip a specified number of documents in the result set.
      return this;
  }
}

module.exports = ApiFeatures;